import React, { useState } from "react";
import { previousUser } from "../api/auth";

const SignIn = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    return (
        <div>
      <form
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            console.log(password, username);
            const token = await previousUser(username, password);
            setLoggedIn(true);
            localStorage.setItem("token", token);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <label htmlFor="username">Previous User:</label>
        <input
          value={username}
          type="text"
          placeholder="Previous User"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label htmlFor="password">Password :</label>
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Sign In</button>
      </form>
    </div>
    )
}

export default SignIn;