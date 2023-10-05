
import styles from "../../styles/blogPost.module.css";
import postCover from "../../images/postCoverTwo.webp";
import dateLogo from "../../images/calendar-24.png";
import placeLogo from "../../images/bed-20.png";

const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

const BlogPost = ({ post }) => {
    const formattedDate = formatDate(post.date);

    return (
        <article className={styles.postUnit}>
            <img src={postCover} alt="post image" className={styles.postCoverImage}/>
            <section className={styles.postUnitTitle}>
                <h3>{post.title}</h3>
                <p>{post.place}</p>
            </section>
            <aside className={styles.postUnitInfo}>
                <div className={styles.postUnitInfoSection}>
                    <img src={dateLogo} alt="logo kalendaru pre datum kedy" />
                    <div className={styles.sectionWhen}>
                        <p>When</p>
                        <p>{formattedDate}</p>
                    </div>
                </div>
                <div className={styles.postUnitInfoSection}>
                    <img src={placeLogo} alt="logo pre sposob spania"/>
                    <div className={styles.sectionHow}>
                        <p>How</p>
                        <p>{post.how}</p>
                    </div>
                </div>
            </aside>
        </article>
    )
}

export default BlogPost;