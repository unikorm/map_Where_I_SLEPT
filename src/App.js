
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Main from "./components/Main/Main";
import About from "./pages/About";

const App = () => {

  return (
    <Router>
      <React.Fragment>
        <Header />
        {/* <Main /> */}
        <Routes>
          <Route exact path="/" Component={Main} />
          <Route exact path="/aboutMe" Component={About} />
        </Routes>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
