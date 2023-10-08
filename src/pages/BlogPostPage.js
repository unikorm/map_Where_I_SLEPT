
import blogData from "../blogData.json";
import styles from "../styles/blogPostPage.module.css";
import postCover from "../images/default.webp";
import Weather from "../components/Weather";

import React from "react";
import { useParams } from "react-router-dom";

const BlogPostPage = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const post = blogData.posts.find((post) => post.id === parseInt(id, 10));
  const mainImagePath = process.env.PUBLIC_URL + post.imagePath || postCover;

  if (!post) {
    return <div>cosi je na**cu</div>; // Handle the case when the post is not found
  }

  return (
    <section className={styles.blogPostPage}>
      <div className={styles.divImage}>
        <img src={mainImagePath} className={styles.mainImage} />
      </div>
      <section className={styles.mainSection}>
        <div>
          <article>
            <h1>{post.title}</h1>
            <p>{post.place}</p>
            <p>{post.date}</p>
            <div className={styles}>
              <img src={likenessLogo} alt="logo pre hodnotenie miesta" /> 
              <div className={styles}>
                <p>How</p>
                <p>{post.how}</p>
              </div>
            </div>
            <div className={styles}>
              <img src={placeLogo} alt="logo pre sposob spania"/>
              <div className={styles}>
                <p>In</p>
                <p>{post.in}</p>
              </div>
            </div>
          </article>
          <article>
            <p>{post.description}</p>
            <p>{post.content}</p>
            <p>{post.info}</p>
          </article>
        </div>
        <aside>
          <div>
            <Weather place={post.position} city={post.place}/>
          </div>
          <div>
            {/* here will be box with people who been there */}
          </div>
        </aside>
        <section>
          {/* here will be map with detail on that place */}
        </section>
      </section>
    </section>
  );
};

export default BlogPostPage;
