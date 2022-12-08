import React from 'react';
import {
  createNewPost,
  updateEntirePost,
  deletePost,
} from '../api/posts';
import './AllPosts.css';
import Button from './Button';

const AllPosts = ({ posts, setPosts }) => {
  // const postToCreate = {
  //   title: '',
  //   description: '',
  //   user._id: 
  // };
  // const postToCompletelyUpdate = {
  //   title: '',
  //   body: '',
  //   user._id: 
  // };

  return (
    <div className='user-posts'>

      <Button
        action={async () => {
          const newPost = await createNewPost(postToCreate);
          setPosts([newPost, ...posts]);
        }}
        content={'Create New Post'}
      />

      <Button
        action={async () => {
          const updatedPost = await updateEntirePost(
            postId,
            postToCompletelyUpdate
          );
          const listToReturn = await posts.filter(
            (post) => post._id !== updatedPost.id
          );
          setPosts([updatedPost, ...listToReturn]);
        }}
        content={'Update Post'}
      />

      <Button
        action={async () => {
          const postDeleted = await deletePost(post._id);
          setPosts([
            ...posts.filter((post) => post._id !== postDeleted.id),
          ]);
        }}
        content={'Delete Post'}
      />

{posts ? posts.map(post => {
        return (
          <div key={post._id} className='post'>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p>{post.price}</p>
          </div>
        )}
      ) : (
        <h2>No Posts Here</h2>
      )}
    </div>
  );
};

export default AllPosts;