import React from "react";
import './Heading.css';
import { Link } from "react-router-dom";

const Heading = ({ user }) => {

    return (
      <header>
        <h1>
          Welcome {user?.username} to Stranger's Things
        </h1>
        <div>
        Already a member? <Link to="/SignIn">Sign In<br></br></Link>
        New user? <Link to="/Register">Sign Up<br></br></Link>
        Just browsing? <Link to="/">See All Stranger's Posts</Link>
    </div>
      </header>
    );  
};

export default Heading;