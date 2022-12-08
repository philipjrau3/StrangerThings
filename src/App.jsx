import "./App.css";
import { fetchMe } from "./api/auth";
import { getAllPosts } from "./api/posts";
import PulledPosts from "./Components/PulledPost";
import Heading from "./Components/Heading";
import Navbar from "./Components/Navbar";
import React, { useState, useEffect } from "react";
import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import AllPosts from "./Components/AllPosts";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getAllPosts();
      setPosts(data.posts)
    }
    fetchPosts()
  }, []);

  // useEffect(() => {
  //   const getMe = async () => {
  //     const data = await fetchMe(token);
  //     setUser(data);
  //     console.log("user", user);
  //   };
  //   if (token) {
  //     getMe();
  //   }
  // }, [token]);

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
          Whats going on?
          <Navbar />
          <AllPosts posts={posts}/>
        </div>
      </>
    </div>
  );
}

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path='/' element={<App />} />
//       <Route path='*' element={<Navigate replace to='/' />} />
//     </>
//   )
// );

export default App;