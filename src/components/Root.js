
import Footer from "./Footer";
import Header from "./Header";

import { useState } from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  const [aboutMeClicked, setAboutMeClicked] = useState(false);

  return (
    <>
      <Header aboutMeClicked={aboutMeClicked} setAboutMeClicked={setAboutMeClicked} />
      <Outlet />
      <Footer aboutMeClicked={aboutMeClicked} setAboutMeClicked={setAboutMeClicked} />
    </>
  );
};

export default Root;