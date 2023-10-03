
import blogData from "../blogData.json";

import React from "react";
import { useParams } from "react-router-dom";

const BlogPostPage = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const post = blogData.posts.find((post) => post.id === parseInt(id, 10));

  if (!post) {
    return <div>cosi je na**cu</div>; // Handle the case when the post is not found
  }

  return (
    <section>
        <div>
            <h1>{post.title}</h1>
            <p>{post.place}</p>
            <p>{post.date}</p>
            <p>{post.how}</p>
        </div>
        <article>
            <p>{post.description}</p>
            <p>{post.content}</p>
            <p>{post.info}</p>
        </article>
    </section>
  );
};

export default BlogPostPage;
