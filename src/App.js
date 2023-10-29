
import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Main from "./components/Main/Main";
import About from "./pages/About";
import BlogPostPage from "./pages/BlogPostPage";
import { ActivePageProvider } from "./customHooks/useActivePage";
import "./App.css";

const App = () => {

  return (
      <ActivePageProvider>
      <React.Fragment>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/aboutMe" element={<About />} />
          <Route path="/:id" element={<BlogPostPage />} />
        </Routes>
        <div className="footer-container">
        <Footer />
        </div>
      </React.Fragment>
      </ActivePageProvider>
  );
}

export default App;
