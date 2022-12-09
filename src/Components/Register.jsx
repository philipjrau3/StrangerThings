import React, { useState } from "react";
import { registerUser } from "../api/auth";

const Register = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            // console.log(password, username);
            const data = await registerUser(username, password);
            if (data.data.token) {
              setToken(data.data.token);
              localStorage.setItem("token", data.data.token);
            }
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <label htmlFor="username">New User:</label>
        <input
          value={username}
          type="text"
          placeholder="New User"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label htmlFor="password">Password :</label>
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;