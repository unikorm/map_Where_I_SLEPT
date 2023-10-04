
import styles from "../../styles/blogPost.module.css";
import postCover from "../../images/postCoverTwo.webp";
import dateLogo from "../../images/calendar-19.svg";
import placeLogo from "../../images/bed-19.svg";

const BlogPost = ({ post }) => {
    return (
        <article className={styles.postUnit}>
            <img src={postCover} alt="post image" className={styles.postCoverImage}/>
            <section>
                <h3>{post.title}</h3>
                <p>{post.place}</p>
            </section>
            <aside>
                <div>
                    <img src={dateLogo} alt="logo kalendaru pre datum kedy" />
                    <p>{post.date}</p>
                </div>
                <div>
                    <img src={placeLogo} alt="logo pre sposob spania"/>
                    <p>{post.how}</p>
                </div>
            </aside>
        </article>
    )
}

export default BlogPost;