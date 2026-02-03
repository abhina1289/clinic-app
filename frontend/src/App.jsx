import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import BookAppointment from "./pages/BookAppointment";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/service" element={<div className="p-20 text-center">Services Page - Coming Soon</div>} />
        <Route path="/team" element={<div className="p-20 text-center">Team Page - Coming Soon</div>} />
        <Route path="/blog" element={<div className="p-20 text-center">Blog Page - Coming Soon</div>} />
        <Route path="/contact" element={<div className="p-20 text-center">Contact Page - Coming Soon</div>} />
      </Routes>
    </>
  );
}

export default App;