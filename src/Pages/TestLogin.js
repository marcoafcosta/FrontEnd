import React from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from "react-router-dom";



export default class LoginForm extends React.Component {
   
    constructor(props) {
        super(props);
        //history = useHistory()
        this.state = {
            islogged: false,
            email: '',
            password: ''
        };
    }
    
    /*  register, handleSubmit, errors  = useForm();
        const onSubmit = data => console.log(data);
        console.log(errors); */
    
   
 

     handleChange = (e) => {
      
        this.setState({
            [e.target.name]: e.target.value
        })
        
    } 

   onSubmit = (e) => {
       e.preventDefault();
       

         fetch('/engine-rest/process-definition/key/login/start', {
            method: 'POST',
            body: JSON.stringify({
                
                "resultEnabled": "true",
                "variables": {
                  "email": { "value": this.state.email, "type": "String" },
                  "password": { "value": this.state.password, "type": "String" }
                  
                },
                "withVariablesInReturn": true
              }),
      
              headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json'
              }
            }).then(response => response.json())
            .then((jsonData) => {
              // jsonData is parsed json object received from url
              console.log(jsonData)
              
              var response = jsonData.variables.success.value;
              if(response === true)
            {
              this.setState({
                islogged: true,
                });
              
            console.log('Login success');
            //window.alert('Login success');
            //return <Redirect />
            //this.props.history.push("/Dashboard"); //entender o push history
          }else{
              console.log('Login failed')
              window.alert('Login failed - Invalid email or password');
            }
            })
            .catch((error) => {
              // handle errors here
              console.error(error)
            });
            this.setState({
              email: '',
              password: ''
              });
        
      
    }
    Form() {
        const { register, handleSubmit, errors } = useForm();
        const onSubmit = data => console.log(data);
        console.log(errors);
      
    }

      render() {
        if (this.state.islogged) {
          return <Redirect to="/Dashboard" />;
        }
        
  return (
    <form onSubmit={this.handleChange}>
      <input type="text" placeholder="Email" name="Email" /* ref={Form => register({required: true, pattern: /^\S+@\S+$/i})} */ />
      <input type="text" placeholder="Password" name="Password" /* ref={Form.register({required: true, min: 6, maxLength: 12})} */ />

      <input type="submit" />
    </form>
  );
}};
  