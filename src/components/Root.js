
import Footer from "./Footer";
import Header from "./Header";
import styles from "../styles/root.module.css";

import { Outlet, useLocation } from "react-router-dom";

const Root = () => {
  const location = useLocation();
  const isAboutMePage = location.pathname === "/aboutMe";

  return (
    <>
      <Header isAboutMePage={isAboutMePage} />
      <Outlet />
      <div className={styles.causeStyling}>
        <Footer isAboutMePage={isAboutMePage} />
      </div>
    </>
  );
};

export default Root;