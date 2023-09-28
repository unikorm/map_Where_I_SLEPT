
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Main from "./components/Main/Main";
import About from "./pages/About";



const App = () => {

  return (
    <Router>
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
