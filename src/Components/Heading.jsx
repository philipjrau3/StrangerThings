import React from "react";
import Register from "./Register";
import './Heading.css';

const Heading = ({ user, setToken }) => {

    return (
      <header>
        <h1>Welcome {user?.username} to Stranger's Things</h1>
        <Register setToken={setToken}/>
      </header>
    );  
};

export default Heading;