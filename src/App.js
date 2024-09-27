// react
import React from "react";
// css
import "./App.css";
// browserrouter
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Components
import Header from "./Component/Header";
import Footer from "./Component/Footer";
// pages
// About pages
import AboutUs from "./pages/About/AboutUs";
import Blog from "./pages/About/Blog";
import BlogCategory from "./pages/About/BlogCategory";
import Contact from "./pages/About/Contact";
import Privacy from "./pages/Privacy/Privacy";
// Terms & Conditions
import Terms from "./pages/TermsConditions/Terms";
import Home from "./pages/Home";
import ScrollTo from "./Utils/ScrollTo";

const App = () => {
  return (
    <div>
      <Router>
        <ScrollTo />
        <Header />
        <Routes>
          <Route path="/grocery/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogCategory" element={<BlogCategory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
