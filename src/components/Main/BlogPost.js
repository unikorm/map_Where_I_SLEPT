
import "../../App.css";

const BlogPost = ({ post }) => {
    return (
        <article className="postUnit">
            <h3>{post.title}</h3>
            <p>{post.place}</p>
        </article>
    )
}

export default BlogPost;