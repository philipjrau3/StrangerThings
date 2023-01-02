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
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  //website posts
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const data = await getAllPosts();
  //     setPosts(data.posts)
  //   }
  //   fetchPosts()
  // }, []);

  //log in 
  useEffect(() => {
    const getMe = async () => {
      const data = await fetchMe(token);
      setUser(data);
      console.log("user", user);
    };
    if (token) {
      getMe();
    }
  }, [token]);

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
              <Route path="Register" element={<Register setToken={setToken}/>}></Route>
              <Route path="SignIn" element={<SignIn setToken={setToken}/>}></Route>
             
            </Routes> 
          {/* <AllPosts posts={posts} setPosts={setPosts}/> */}
        </div>
      </>
    </div>
  );
}

export default App;