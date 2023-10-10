
import styles from "../../styles/blog.module.css";
import BlogPost from "./BlogPost";
import blogData from "../../blogData.json";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
    const initialPostCount = 12;
    const [displayedPosts, setDisplayedPosts] = useState(() => {
        return blogData.posts.slice(0, initialPostCount);
    });

    const [displayedPostBoxes, setDisplayedPostBoxes] = useState([]);

    const loadMorePosts = () => {
        const newDisplayCount = displayedPosts.length + 12;
        if (newDisplayCount <= blogData.posts.length) {
          setDisplayedPosts(blogData.posts.slice(0, newDisplayCount));
        }
    };

    return (
        <section className={styles.blogSection}>
            <h3 className={styles.h3}>More about places where I/We slept</h3>
            <section className={styles.postsTable}>
            {displayedPosts.map((post, index) => (
                <Link to={`/${post.id}`} key={post.id} className={`${styles.postBox}
                ${ index >= 0 && styles.show
                  }`}>
                    <BlogPost post={post} />
                </Link>
            ))}
            </section>
            {displayedPosts.length < blogData.posts.length && (
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