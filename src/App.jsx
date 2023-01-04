import "./App.css";
import { fetchMe } from "./api/auth";
import { getAllPosts } from "./api/posts";
import Heading from "./Components/Heading";
import AllPosts from "./Components/AllPosts";
import Register from "./Components/Register";
import SignIn from "./Components/SignIn";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token") ? true : false) 
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  //website posts
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getAllPosts();
      setPosts(data.posts)
    }
    fetchPosts()
  }, []);

  //log in 
  useEffect(() => {
    console.log(loggedIn)
    const getMe = async () => {
      const token = localStorage.getItem('token');
      const data = await fetchMe(token);
      setUser(data);
      console.log("data", data);
    };
    if (loggedIn) {
      getMe();
    }
    console.log(user);
  }, [loggedIn]);

  //buttons
  useEffect(() => {
    const setInitialData = async () => {
      const fetchedPosts = await getAllPosts();
      setPosts(fetchedPosts);
    };
    setInitialData();
  }, []);

  return (
    <div>
      <>
        <div className="App">
          <Heading />
          <Routes>
              <Route path="/" element={<AllPosts posts={posts} setPosts={posts}/>}></Route>
              <Route path="Register" element={<Register setLoggedIn={setLoggedIn}/>}></Route>
              <Route path="SignIn" element={<SignIn setLoggedIn={setLoggedIn}/>}></Route>
            </Routes> 
        </div>
      </>
    </div>
  );
}

export default App;