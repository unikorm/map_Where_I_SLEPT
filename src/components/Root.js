
import Footer from "./Footer";
import Header from "./Header";

import { Outlet, useLocation } from "react-router-dom";

const Root = () => {
  const location = useLocation();
  const isAboutMePage = location.pathname === "/aboutMe";

  return (
    <>
      <Header isAboutMePage={isAboutMePage} />
      <Outlet />
      <Footer isAboutMePage={isAboutMePage} />
    </>
  );
};

export default Root;