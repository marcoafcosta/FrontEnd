import React from "react";
import { useForm } from "react-hook-form";
import handleNewUserMessage from '../App';


function ReplaceForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    var newMessage = JSON.stringify(data);
    console.log(newMessage);
    handleNewUserMessage(newMessage);
  }; // your form submit function which will invoke after successful validation

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        name="Name"
        ref={register({ required: true, maxLength: 50 })} />
      <br></br>
      <label>Address</label>
      <input
        name="Address"
        ref={register({ required: true, maxLength: 50 })} />
      <br></br>
      <label>Post Code</label>
      <input
        name="postCode"
        ref={register({ required: true, maxLength: 10 })}
      /><br></br>
      <label>Phone Number</label>
      <input
        name="phoneNumber"
        ref={register({ required: true, maxLength: 50 })} />
      <br></br>
      {errors.postCode && <p>This field is required</p>}
      <input type="submit" />
    </form>
  );
}

export default ReplaceForm;