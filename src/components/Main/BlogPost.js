
import "../../App.css";

const BlogPost = ({ post }) => {
    return (
        <article key={post.id}>
            <image src={post.srcImg} />
            <h3>{post.title}</h3>
            <p>{post.description}</p>
        </article>
    )
}

export default BlogPost;