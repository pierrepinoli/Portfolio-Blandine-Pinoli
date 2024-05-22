"use client";

import Acrylic from "@/components/Acrylic";
import Oil from "@/components/Oil";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
import Sculpture from "../components/Sculpture";
import Watercolor from "../components/Watercolor";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="content-container flex flex-col items-center gap-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/oil" element={<Oil />} />
              <Route path="/acrylic" element={<Acrylic />} />
              <Route path="/watercolor" element={<Watercolor />} />
              <Route path="/sculpture" element={<Sculpture />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
