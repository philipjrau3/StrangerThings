import React from "react";
import './Heading.css';

const Heading = ({ user }) => {

    return (
      <header>
        <h1>
          Welcome {user?.username} to Stranger's Things
        </h1>
      </header>
    );  
};

export default Heading;