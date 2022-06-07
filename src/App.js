import React from "react";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import MovieWithParams from "./components/Movie";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:moveId" element={<MovieWithParams />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <GlobalStyle />
    <Footer />
  </Router>
);

export default App;
