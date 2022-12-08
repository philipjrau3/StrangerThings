import React from "react";
import AllPosts from "./AllPosts";

const Navbar = ({ posts }) => {
    return(
      <Navbar>
        <AllPosts posts={posts} />
      </Navbar>
    )
}

export default Navbar;