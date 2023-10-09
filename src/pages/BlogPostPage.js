
import blogData from "../blogData.json";
import styles from "../styles/blogPostPage.module.css";
import postCover from "../images/default.webp";
import Weather from "../components/Weather";
import PopUpInfo from "../components/PopUpInfo";
import MapInBlogPost from "../components/MapInBlogPost";
import dateLogo from "../images/calendar-24.png";
import placeLogo from "../images/bed-20.png";
import likenessLogo from "../images/stars-24.png";

import React from "react";
import { useParams } from "react-router-dom";

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const BlogPostPage = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const post = blogData.posts.find((post) => post.id === parseInt(id, 10));
  const mainImagePath = process.env.PUBLIC_URL + post.imagePath || postCover;
  const formattedDate = formatDate(post.date);

  if (!post) {
    return <div>cosi je na**cu</div>; // Handle the case when the post is not found
  }

  return (
    <section className={styles.blogPostPage}>
      <div className={styles.divImage} style={{backgroundImage: `url(${mainImagePath})`}}>
          <aside>
            <section className={styles}>
              <h3>{post.title}</h3>
              <p>{post.place}</p>
            </section>
            <div className={styles}>
                    <img src={dateLogo} alt="logo kalendaru pre datum kedy" />
                    <div className={styles}>
                        <p>When</p>
                        <p>{formattedDate}</p>
                    </div>
            </div>
            <div className={styles}>
                    <img src={likenessLogo} alt="logo pre hodnotenie miesta" />
                    <div className={styles}>
                        <p>How</p>
                        <p>{post.how}</p>
                    </div>
            </div>
            <div className={styles}>
                    <img src={placeLogo} alt="logo pre sposob spania" />
                    <div className={styles}>
                        <p>In</p>
                        <p>{post.in}</p>
                    </div>
            </div>
          </aside>
      </div>

      <section className={styles.mainSection}>
        <section className={styles.mainSectionContainer}>
          <article className={styles.article}>
            <p>{post.description}</p>
            <p>{post.content}</p>
            <PopUpInfo info={post.info} />
          </article>

          <aside className={styles.aside}>
            <div>
              <Weather place={post.position} city={post.place}/>
            </div>
            <div>
              {/* here will be box with people who been there */}
            </div>
          </aside>
        </section>

        <section>
          <MapInBlogPost data={post} />
        </section>
      </section>
    </section>
  );
};

export default BlogPostPage;
