import React from 'react';
import {
  createNewPost,
  updateEntirePost,
  deletePost,
} from '../api/posts';
import './AllPosts.css';
import Button from './Button';

const AllPosts = ({ posts, setPosts }) => {
  const postId = 1;
  const postId2 = 2;
  const postId3 = 3;
  const postToCreate = {
    title: 'Our New Post',
    body: 'This post is mostly about the bestestest kitten, my Grim!',
    userId: 1,
  };
  const postToCompletelyUpdate = {
    title: 'Our Updated Post with id: 1',
    body: 'I also have a slither puppy named Nagini!',
    userId: 1,
  };
  const fieldsToUpdate = {
  };

  return (
    <div className='user-posts'>

      <Button
        action={async () => {
          const newPost = await createNewPost(postToCreate);
          setAllPosts([newPost, ...posts]);
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
            (post) => post.id !== updatedPost.id
          );
          setAllPosts([updatedPost, ...listToReturn]);
        }}
        content={'Update Post'}
      />

      <Button
        action={async () => {
          const postDeleted = await deletePost(postId3);
          setAllPosts([
            ...posts.filter((post) => post.id !== postDeleted.id),
          ]);
        }}
        content={'Delete Post'}
      />

      {posts.length ? (
        posts.map(({ id, title, body }) => (
          <div key={id} className='post'>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))
      ) : (
        <h2>No Posts Here</h2>
      )}
    </div>
  );
};

export default AllPosts;