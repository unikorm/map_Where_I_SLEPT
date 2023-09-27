
import React from 'react';

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Main from "./components/Main/Main";

import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
