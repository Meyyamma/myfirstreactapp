import React from "react";

import Card from '../UI/Card'
import classes from './AddUser.module.css'

const AddUser = (props) => {
    const addUserHandler = (event) =>{
        event.preventDefault();
    }
  return (
    // Card is our own component, it's not builtin HTML generated component!
    // For our custom component it doesn't know what to do with the className prop
    // In the below line cssClass comes from Card.js-- {props.cssClass}
    <Card cssClass = {classes.input}> 
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">UserName</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age (Years) </label>
      <input id="age" type="number" />
      <button type="submit">Add User</button>
    </form>
    </Card>
  );
};

export default AddUser;
