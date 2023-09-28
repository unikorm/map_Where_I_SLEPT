
import "../../App.css";
import BlogPost from "./BlogPost";


// zobrat data o postoch na blog a spravit s nimi nieco aby som ich po jednom mohol dat ako props-i


const Blog = () => {
    return (
        <section className="blogSection">
            <h3>O miestach kde som spal</h3>
            <section>
                <BlogPost post={"some data"}/> {/* map over all posts here */}
            </section>
        </section>
    );
}

export default Blog;