
import "../../App.css";

const BlogPost = ({ post }) => {
    return (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.place}</p>
        </article>
    )
}

export default BlogPost;