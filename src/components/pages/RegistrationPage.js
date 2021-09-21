import React from 'react';
import {Link} from "react-router-dom";
import RegistrationForm from "../forms/RegistrationForm";
import axios from 'axios';
import {Button } from 'semantic-ui-react';

class RegistrationPage extends React.Component{



//Gets the data and sumbits it for a post request
submit = data => {

  axios.post('http://localhost:3333/register',{
    name:data.username,
    email:data.email,
    password:data.password,
    admin:data.admin
  })
  .then(function(response){


    //This is responsible for the page navigation.
    // eslint-disable-next-line no-unused-expressions
    response.data.success
    ?  (document.getElementById('status').innerHTML = "Registration Successfull! You are being redirected to login in 5 seconds.",setTimeout(() => {window.location.replace('/login')},5000))
    : document.getElementById('status').innerHTML = response.data.message
  });
};



render(){

  //alert("Response is : " + this.state.response);
  return(
    <div align="top">
      <h1>Registration Page</h1>
      <RegistrationForm  submit={this.submit}/>
        <p id="status"></p>
        <Link to="/" className="button">Back to Home</Link>

    </div>

  );

}

}

export default RegistrationPage;
