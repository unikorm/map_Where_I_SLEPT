
import styles from "../../styles/blog.module.css";
import BlogPost from "./BlogPost";
import blogData from "../../blogData.json";

const Blog = () => {
    const posts = blogData.posts;

    return (
        <section className={styles.blogSection}>
            <h3>O miestach kde som spal</h3>
            <section className={styles.postsTable}>
                {
                posts.map(( post ) => (
                    <BlogPost key={post.id} post={post} />
                ))
                }
            </section>
        </section>
    );
}

export default Blog;