import React from "react";

const PulledPosts = ({posts}) => {

    return (
        <div>
              {
              posts.map(post => {
              return (<div key={post._id}>
                  <h3>{post.title}</h3>
                  <div>{post.description}</div>
                  <div>{post.price}</div>
              </div>)})
              }
        </div>)
}
  

export default PulledPosts;