import React from "react";
import Register from "./LogIn";
import './Heading.css';

const Heading = ({ user, setToken }) => {

    return (
      <header>
        <h1>Welcome {user?.username} to Stranger's Things</h1>
        {/* <Register setToken={setToken}/> */}
      </header>
    );  
};

export default Heading;