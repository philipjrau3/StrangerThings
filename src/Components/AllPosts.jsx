import React, { useState } from 'react';
import {
  createMessage,
  createNewPost,
  deletePost,
} from '../api/posts';
import './AllPosts.css';
import Button from './Button';

const AllPosts = ({ posts, setPosts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");


  return (
    <div className='user-posts'>

      <form>
        <label htmlFor="title">Title:</label>
        <input
          value={title}
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label htmlFor="description">Description:</label>
        <input
          value={description}
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <label htmlFor="price">Price:</label>
        <input
          value={price}
          type="text"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        ></input>
      </form>
        <Button
          action={async () => {
            const token = localStorage.getItem("token")
            const newPost = await createNewPost(title, description, price, token);
            setPosts([newPost, ...posts]);
          }}
          content={'Create New Post'}
        />

{posts ? posts.map(post => {
  return (
    <div key={post._id} className='post'>
            <h3>Title: {post.title}</h3>
            <p>Item Description: <br></br>{post.description}</p>
            <p>Price: {post.price}</p>

        <form>
          <label htmlFor="message">New Message:</label>
          <input
            value={message}
            type="text"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
          ></input>
        </form>
        <Button 
          action={async () => {
            const token = localStorage.getItem("token")
            const newMessage = await createNewPost(message, token);
            setMessage([newMessage]);
          }}
          content={'Send Message'}
        />

            <Button
              action={async () => {
                const token = localStorage.getItem("token")
                const postDeleted = await deletePost(post.id, token);
                setPosts([...posts.filter(post => post.id !== postDeleted.id),
                ]);
              }}
              content={'Delete Post'}
            /> 
          </div>
        )}
      ) : (
        <h2>No Posts Here</h2>
      )}
    </div>
  );
};

export default AllPosts;