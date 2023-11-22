
import blogData from "../../blogData.json";

import styles from "../../styles/blog.module.css";
import BlogPost from "./BlogPost";

import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
    const filteredPosts = blogData.posts.filter((post) => post.show === true);
    

    return (
        <section className={styles.blogSection}>
            <h3 className={styles.h3}>More about places where I/We slept</h3>
            <section className={styles.postsTable}>
            {filteredPosts.map((post) => (
                <Link to={`/${post.id}`}
                key={post.id} className={styles.postBox}>
                    <BlogPost post={post} />                 { /* component */ }
                </Link>
            ))}
            </section>
        </section>
    );
};

export default Blog;