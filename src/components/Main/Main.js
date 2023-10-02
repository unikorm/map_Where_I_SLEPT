
import "../../styles/main.css";
import Map from "../Main/Map";
import Blog from "../Main/Blog";
import Description from "../Main/Description";

const Main = () => {
    return (
        <main className="main">
            <Map />
            <Description />
            <Blog />
        </main>
    );
}

export default Main;