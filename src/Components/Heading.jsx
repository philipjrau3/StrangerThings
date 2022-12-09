import React from "react";
// import Register from "./Register";
import { Route, Routes } from 'react-router-dom';
import './Heading.css';

const Heading = ({ user, setToken }) => {

    return (
      <header>
        <h1>
          Welcome {user?.username} to Stranger's Things
        </h1>
          {/* <Routes>
            <Route exact path="/" element={<App />}></Route>
            <Route path='*' element={<Navigate replace to='/' />}></Route>
          </Routes> */}
        {/* <Register setToken={setToken}/> */}
      </header>
    );  
};

export default Heading;