import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from './components/Footer';
import Home from "./pages/Home";
import Services from './pages/Services';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import BookAppointment from "./pages/BookAppointment";
import { Toaster } from "sonner"; 


function App() {
  return (
    <>
      <Toaster 
        position="top-right" 
        richColors 
        expand={false}
        duration={4000}
        closeButton
      />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/service" element={<Services/>} />
        <Route path="/review" element={<Reviews/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;