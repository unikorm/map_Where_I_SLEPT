
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);







// import React from 'react';
// import { Routes, Route } from "react-router-dom";

// import Header from "../src/components/Header";
// import Footer from "../src/components/Footer";
// import Main from "./components/Main/Main";
// import About from "./pages/About";
// import BlogPostPage from "./pages/BlogPostPage";
// import { ActivePageProvider } from "./customHooks/useActivePage";
// import "./App.css";

// const App = () => {

//   return (
//       <ActivePageProvider>
//       <React.Fragment>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Main />} />
//           <Route path="/aboutMe" element={<About />} />
//           <Route path="/:id" element={<BlogPostPage />} />
//         </Routes>
//         <div className="footer-container">
//         <Footer />
//         </div>
//       </React.Fragment>
//       </ActivePageProvider>
//   );
// }

// export default App;
