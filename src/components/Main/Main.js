
import styles from "../../styles/main.module.css";
import Map from "../Main/Map";
import Blog from "../Main/Blog";
import Description from "../Main/Description";

const Main = () => {
    

    return (
        <main className={styles.main}>
            <Map />
            <Description />
            <Blog />
        </main>
    );
}

export default Main;