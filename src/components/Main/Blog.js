
import "../../App.css";
import BlogPost from "./BlogPost";
import blogData from "../../blogData.json";

const Blog = () => {
    const posts = blogData.posts;

    return (
        <section className="blogSection">
            <h3>O miestach kde som spal</h3>
            <section>
                {
                    posts.map(( post, index ) => {
                        <BlogPost key={index} post={post} />
                    })
                }
            </section>
        </section>
    );
}

export default Blog;