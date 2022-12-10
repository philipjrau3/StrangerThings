import React from "react";
const cohort = "2211-FTB-ET-WEB-FT";
const APIURL = `https://strangers-things.herokuapp.com/api/${cohort}`;

export const getAllPosts = async () => {
    try{
        const response = await fetch(`${APIURL}/posts`);
        const results = await response.json();
        const posts = results.data.posts;
        return posts;
        
    } catch (error){
        console.error(error);
        console.log("Whoops, no more stuff!");
    }
}

export const createNewPost = async (title, description, price, token) => {
    try {
      const response = await fetch(`${APIURL}/posts`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            post: {
              title: title,
              description: description,
              price: price,
            }
          })
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  export const deletePost = async (postId, token) => {
    try {
      const response = await fetch(`${APIURL}/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
          }
      });
      const data = await response.json();
      return { data, id: postId };
    } catch (error) {
      throw error;
    }
  }

  export const createMessage = async (message, token) => {
    try {
        const response = await fetch(`${APIURL}/posts/${postId}/messages`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              message: {
                content: message
              }
            })
          })
          const data = await response.json();
          return { data, id: postId };
        } catch (error) {
          throw error;
        }
  };