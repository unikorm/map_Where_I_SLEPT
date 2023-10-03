
import styles from "../../styles/blog.module.css";
import BlogPost from "./BlogPost";
import blogData from "../../blogData.json";

import { Link } from "react-router-dom";

const Blog = () => {
    const posts = blogData.posts;

    return (
        <section className={styles.blogSection}>
            <h3>O miestach kde som spal</h3>
            <section className={styles.postsTable}>
                {posts.map(( post ) => (
                    post.id <= 12 && (
                        <Link to={`/${post.id}`} key={post.id}>
                            <BlogPost post={post} />
                        </Link>
                    )))
                }
            </section>
        </section>
    );
}

export default Blog;