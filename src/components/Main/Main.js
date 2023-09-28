
import "../../App.css";
import Map from "../Main/Map";
import Blog from "../Main/Blog";
import Description from "../Main/Description";

const Main = () => {
    return (
        <main>
            <h2>Toto sú miesta kde som už spinkal</h2>
            <Map />
            <Description />
            <Blog />
        </main>
    );
}

export default Main;