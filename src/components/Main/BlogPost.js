
import styles from "../../styles/blogPost.module.css";
import postCover from "../../images/postCoverTwo.webp";

const BlogPost = ({ post }) => {
    return (
        <article className={styles.postUnit}>
            <img src={postCover} alt="post image" className={styles.postCoverImage}/>
            <h3>{post.title}</h3>
            <p>{post.place}</p>
        </article>
    )
}

export default BlogPost;