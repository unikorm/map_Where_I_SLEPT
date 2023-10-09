
import styles from "../../styles/blog.module.css";
import BlogPost from "./BlogPost";
import blogData from "../../blogData.json";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
    const initialPostCount = 12;
    const posts = blogData.posts.slice(0, initialPostCount);

    const [displayCount, setDisplayCount] = useState(initialPostCount);

    const loadMorePosts = () => {
        const newDisplayCount = displayCount + 12;
        if (newDisplayCount < blogData.posts.length) {
            setDisplayCount(newDisplayCount);
        };
    };

    return (
        <section className={styles.blogSection}>
            <h3 className={styles.h3}>More about places where I/We slept</h3>
            <section className={styles.postsTable}>
            {posts.map((post) => (
                <Link to={`/${post.id}`} key={post.id} className={styles.postBox}>
                    <BlogPost post={post} />
                </Link>
            ))}
            </section>
            {displayCount < blogData.posts.length && (
                <button 
                    onClick={loadMorePosts}
                    className={styles.loadMoreBttn}
                    key="load-more-button"
                >
                    Load More
                </button>
            )}
        </section>
    );
}

export default Blog;