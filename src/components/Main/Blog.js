
import styles from "../../styles/blog.module.css";
import BlogPost from "./BlogPost";
import blogData from "../../blogData.json";

import { Link } from "react-router-dom";

const Blog = () => {
    const posts = blogData.posts;

    return (
        <section className={styles.blogSection}>
            <h3 className={styles.h3}>More about places where I/We slept</h3>
            <div className={styles.postsTableContainer}></div>
            <section className={styles.postsTable}>
                {posts.map(( post ) => (
                    post.id <= 12 && (
                        <Link to={`/${post.id}`} key={post.id} className={styles.postBox}>
                            <BlogPost post={post} />
                        </Link>
                    )))
                }
            </section>
            <div/>
        </section>
    );
}

export default Blog;