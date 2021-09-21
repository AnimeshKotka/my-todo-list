import React from 'react';
import {Link} from "react-router-dom";
import {Button} from 'semantic-ui-react';
import './beamlogo.png';

const HomePage = () => (
<div className="ui container">
  <img src={"./beamlogo.png"}/>
  <h1>Home Page</h1>
  <Link to='/login' className="button"> Login </Link><br/>
  <Link to='/registration' className ="button"> Registration</Link>
</div>

);

export default HomePage;
