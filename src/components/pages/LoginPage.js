import React from 'react';
import {Link} from "react-router-dom";
import LoginForm from "../forms/LoginForm";
import axios from 'axios';
import {Button } from 'semantic-ui-react';
import './beamlogo.png';


class LoginPage extends React.Component{

//This gets the data and sends it as a post request
submit = data => {

    //alert("username: " + data.username);
    //This calls the URL to submit the post request.
    axios.post('http://localhost:3333/api/login',{
      email:data.email,
      password:data.password
    })
    .then(function(response){
      var email = response.data.email;

      //This part is responsible for the window navigation after login.
      // eslint-disable-next-line no-unused-expressions
      response.data.success
      ?  (document.getElementById('status').innerHTML = "Login Successfull! You are being redirected to landing page in 5 seconds.",setTimeout(() => {window.location.replace('/landing?name='+ email)},5000))
      : document.getElementById('status').innerHTML = response.data.message
    });
  };

//This renders the HTML code
render(){
  return(

      <div>
          <h1>Login Page</h1>
          <LoginForm submit={this.submit}/>
          <p id="status"></p>
          <p>Make a new account? Right here.</p>
          <Link to="/registration" className="button">Registration</Link>
      </div>

    );
  }
}




export default LoginPage;
