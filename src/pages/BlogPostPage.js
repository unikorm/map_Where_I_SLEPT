
import blogData from "../blogData.json";

import styles from "../styles/blogPostPage.module.css";

import Weather from "../components/Weather";
import PopUpInfo from "../components/PopUpInfo";
import MapInBlogPost from "../components/MapInBlogPost";
import Users from "../components/Users";

import postCover from "../images/default.webp";
import dateLogo from "../images/calendar-24.png";
import placeLogo from "../images/bed-20.png";
import likenessLogo from "../images/stars-24.png";

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogData.posts.find((post) => post.id === parseInt(id, 10));
  const mainImagePath = process.env.PUBLIC_URL + post.imagePath || postCover;
  const formattedDate = formatDate(post.date);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return <div>cosi je na**cu</div>;
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
            <PopUpInfo info={post.info} />        { /* component */ }
          </article>

          <aside className={styles.aside}>
            <section className={styles.asideBox}>
              <div>
                <Weather place={post.position} city={post.place}/>         { /* component */ }
              </div>
              <div>
                <Users users={post.users} />         { /* component */ }
              </div>
            </section>
          </aside>
        </section>

        <section className={styles.mapSectionInPost}>
          <MapInBlogPost data={post} />         { /* component */ }
        </section>
      </section>
    </section>
  );
};

export default BlogPostPage;
