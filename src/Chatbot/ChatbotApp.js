import logo from './logo.png';
import 'react-chat-widget/lib/styles.css';
import { Widget, addResponseMessage, setQuickButtons, addUserMessage, addLinkSnippet, renderCustomComponent, toggleInputDisabled, senderPlaceHolder } from 'react-chat-widget';
import React, { useEffect } from 'react';
import ImageComponent from './ImageComponent';
import { useForm } from "react-hook-form";
import 'semantic-ui-css/semantic.min.css';




function ChatbotApp() {

  //this is the chatId value returned by Camunda Instance Id
  var camundaInstanceId = "null";
  var liveChat = false;
  var liveChatStarted = false;

  //Chatbot start message
  useEffect(() => {
    addResponseMessage('Welcome to AI4 Process chat!');
    addResponseMessage("How can I help you today?");

  }, []);


  const handleQuickButtonClicked = (value) => {
    // value is the 'value' set by setQuickButtons
    console.log('New button press ' + value);
    handleNewUserMessage(value);
    //Go to live chat buttons
    if (value === "liveChat") {
      addUserMessage("Yes");
      addResponseMessage("One of our team members will be with you in a few moments. Please wait.");
      setQuickButtons([]);
      
    }
    else if (value === "endChat") {
      addUserMessage("No");
      addResponseMessage("Thank you. If you continue to experience any problems, please refresh his page or visit our website");
      setQuickButtons([]);
      
    } //Wait for task to be complete in tasklist - live chat 
    else if (value === "waitYes") {
      addUserMessage("Yes");
      addResponseMessage("Thank you, please continue to wait for one of our team members");
      setQuickButtons([]);
      
    }
    else if (value === "yesProductIssue") {
      addUserMessage("How to find a Serial Number");
      addLinkSnippet({
        title: 'User Manual',
        link: 'https://www.4delonghi.co.uk/find-your-model-number/help.pl',
        target: '_blank',

      });
      setQuickButtons([]);
      
    }
    else {
      addUserMessage(value);
      setQuickButtons([]);
      
    }
    toggleInputDisabled()
    console.log("Input disabled in if statements"); 
  };

  const handleNewUserMessage = (newMessage) => {
    console.log('New message incoming! ' + newMessage);

    const userAction = async () => {

      const response = await fetch('/engine-rest/process-definition/key/chatbotRegister/start', {
        method: 'POST',

        body: JSON.stringify({
          "messageName": "chatBot message",
          "resultEnabled": "true",
          "variables": {
            "incomingMessage": { "value": newMessage, "type": "String" },
            "chatId": { "value": camundaInstanceId, "type": "Long" },
            "liveChat": { "value": liveChat, "type": "Boolean" },
            "liveChatStarted": { "value": liveChatStarted, "type": "Boolean" }
          },
          "withVariablesInReturn": true
        }),

        headers: {
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json'
        }
      });

      //extract JSON from the http response
      const myJson = await response.json(); //extract JSON from the http response

      try {

        // Show any multimedia first
        var multimedia = JSON.parse(myJson.variables.multimedia.value);

        //    Debugging for the multimedia json
        console.log("Multimedia active: " + multimedia.active)
        console.log("\ttype:" + multimedia.type)
        console.log("\tname:" + multimedia.name)

        if (multimedia.active) {
          switch (multimedia.type) {

            // Display an image with path of multimedia.name's value
            case "image":
              console.log("IMAGE RECEIVED");
              renderCustomComponent(ImageComponent, { imagePath: multimedia.name });
              break;

            // Display a link 
            case "link":
              console.log("LINK RECIEVED");
              addLinkSnippet({
                title: 'Click Here',
                link: multimedia.name,
                target: '_blank'
              });
              break;

            // 
            case "form":
              console.log("FORM RECIEVED");
              //renderCustomComponent(Form, {formName: multimedia.name});
              renderCustomComponent(function Form2() {
                const { register, handleSubmit, errors } = useForm();
                const onSubmit = data => {
                  var newMessage = JSON.stringify(data);
                  console.log(newMessage);
                  handleNewUserMessage(newMessage);
                  
                }; // your form submit function which will invoke after successful validation
                
                


                return (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Address</label>
                    <input
                      name="address"
                      ref={register({ required: true, maxLength: 50 })} />
                    <br></br>
                    <label>Post Code</label>
                    <input
                      name="postCode"
                      ref={register({ required: true, maxLength: 10 })}
                    /><br></br>
                    {errors.postCode && <p>This field is required</p>}
                    <input type="submit" />
                  </form>
                );
              });
              
              /* toggleInputDisabled()
              console.log("Input disabled in form"); */
              break;
          }
          //toggleInputDisabled()
          //console.log("Input disabled in multimedia");
        }
        //set variable responseMessage that contains myJson object and return it in the addResponseMessage
        var responseMessage = myJson.variables.responseMessage.value;
        addResponseMessage(responseMessage);
        if (responseMessage.length === 0) {
          addResponseMessage("Please can you retype your question?") //If message from user is empty, chatbot will ask customer to retype question
        };

        camundaInstanceId = myJson.variables.chatId.value;

        //console.log(myJson.variables.displayButtons.value + ' Display buttons variable value');
        //set variable buttons that contains myJson object and return it in the setQuickButtons
        var buttonsFlag = myJson.variables.displayButtons.value;
        var buttons = myJson.variables.buttons.value;
        liveChat = myJson.variables.liveChat.value;

        if (buttonsFlag === true) {


          setQuickButtons(JSON.parse(buttons));
          toggleInputDisabled()
          
          console.log("Input disabled in buttons flag");

        } else {
          setQuickButtons([]);
        }

      } catch (error) {
        addResponseMessage("Chat server is currently unavailable, please try again later");
        camundaInstanceId = null;
      }

    }
    userAction();

  };

  return (

    <Widget
      handleNewUserMessage={handleNewUserMessage}
      profileAvatar={logo}
      title="Chatbot Demo"
      subtitle="Handling a personal complaint"
      handleQuickButtonClicked={handleQuickButtonClicked}

    />

  );
}

export default ChatbotApp;