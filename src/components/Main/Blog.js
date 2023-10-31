
import blogData from "../../blogData.json";

import styles from "../../styles/blog.module.css";
import BlogPost from "./BlogPost";

import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
    const initialPostCount = 6;
    const posts = blogData.posts.slice(0, initialPostCount);

    // dobre, toto bude inak, ja dam na mapu vsetky miesta kde som spal, ale blog section bude iba s miestami co si 
    // vyberiem ze stoja za to, takto na zaciatok, lebo tolko contentu nenapisem, takze asi mozno max 10 to bude,
    // potom casom mozno viac... chcem programovat, nie pisat blog...

    return (
        <section className={styles.blogSection}>
            <h3 className={styles.h3}>More about places where I/We slept</h3>
            <section className={styles.postsTable}>
            {posts.map((post) => (
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