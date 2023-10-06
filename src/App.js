
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Main from "./components/Main/Main";
import About from "./pages/About";
import BlogPostPage from "./pages/BlogPostPage";
import { ActivePageProvider } from "./customHooks/useActivePage";
import "./App.css";

const App = () => {

  return (
    <Router>
      <ActivePageProvider>
      <React.Fragment>
        <Header />
        <Routes>
          <Route exact path="/" Component={Main} />
          <Route exact path="/aboutMe" Component={About} />
          <Route exact path="/:id" element={<BlogPostPage />} />
        </Routes>
        <div className="footer-container">
        <Footer />
        </div>
      </React.Fragment>
      </ActivePageProvider>
    </Router>
  );
}

export default App;
