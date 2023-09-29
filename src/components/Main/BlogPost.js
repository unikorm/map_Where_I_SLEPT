
import "../../App.css";
import postCover from "../../images/postCover.webp";

const BlogPost = ({ post }) => {
    return (
        <article className="postUnit">
            <img src={postCover} alt="post image" className="postCoverImage"/>
            <h3>{post.title}</h3>
            <p>{post.place}</p>
        </article>
    )
}

export default BlogPost;