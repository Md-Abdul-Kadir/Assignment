import React from "react";
import { Container } from "react-bootstrap";
import ShowPosts from "./ShowPosts";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <Container>
      <div>
        {posts.map((post) => (
          <ShowPosts posts={post} key={post.key}></ShowPosts>
        ))}
      </div>
    </Container>
  );
};

export default Posts;
