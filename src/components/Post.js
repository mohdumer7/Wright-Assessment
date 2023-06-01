import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  throw new Error("Error");
  return <div>Post</div>;
};

export default Post;
