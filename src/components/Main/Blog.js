
import styles from "../../styles/blog.module.css";
import BlogPost from "./BlogPost";
import blogData from "../../blogData.json";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {

    const initialPostCount = 6;
    const [displayedPosts, setDisplayedPosts] = useState(() => {
        return blogData.posts.slice(0, initialPostCount);
    });


    // const loadMorePosts = () => {
    //     const newDisplayCount = displayedPosts.length + 12;
    //     if (newDisplayCount <= blogData.posts.length) {
    //       setDisplayedPosts(blogData.posts.slice(0, newDisplayCount));
    //     }
    // };


    // dobre, toto bude inak, ja dam na mapu vsetky miesta kde som spal, ale blog section bude iba s miestami co si 
    // vyberiem ze stoja za to, takto na zaciatok, lebo tolko contentu nenapisem, takze asi mozno max 10 to bude,
    // potom casom mozno viac... chcem programovat, nie pisat blog...


    return (
        <section className={styles.blogSection}>
            <h3 className={styles.h3}>More about places where I/We slept</h3>
            <section className={styles.postsTable}>
            {displayedPosts.map((post) => (
                <Link to={`/${post.id}`}
                key={post.id} className={styles.postBox}>
                    <BlogPost post={post} />
                </Link>
            ))}
            </section>
            {/* {displayedPosts.length < blogData.posts.length && (
                <button 
                    onClick={loadMorePosts}
                    className={styles.loadMoreBttn}
                    key="load-more-button"
                >
                    Load More
                </button>
            )} */}
        </section>
    );
}

export default Blog;