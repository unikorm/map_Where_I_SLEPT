
import styles from "../../styles/blogPost.module.css";
import postCover from "../../images/postCoverTwo.webp";

const BlogPost = ({ post }) => {
    return (
        <article className={styles.postUnit}>
            <img src={postCover} alt="post image" className={styles.postCoverImage}/>
            <div>
                <h3>{post.title}</h3>
                <p>{post.place}</p>
            </div>
            <div>
                <p>{post.date}</p>
                <p>{post.how}</p>
            </div>
        </article>
    )
}

export default BlogPost;