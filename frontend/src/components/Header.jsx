import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import naavika from"../assets/Brands/naavika.png"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Naavika Theme
  const theme = {
    red: "#c92424",
    blue: "#4484c4",
    green: "#3a9f43",
    lightBg: "#f9fafb",
    textDark: "#222",
  };

  return (
    <nav
      className="w-full bg-white shadow-sm border-b sticky top-0 z-50"
      style={{
        boxShadow: `0 2px 10px ${theme.blue}10`,
        borderBottomColor: `${theme.blue}20`,
      }}
    >
      <div className="container mx-auto px-8 py-5">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 no-underline">
            <img
              src={naavika}
              alt="naavika logo"
              className="h-18 w-auto object-contain"
            />


          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/" className="font-medium text-blue-500 no-underline">
              Home
            </Link>
            <Link to="/service" className="font-medium text-gray-700 no-underline">
              Services
            </Link>
            <Link to="/review" className="font-medium text-gray-700 no-underline">
              Reviews
            </Link>
            <Link to="/contact" className="font-medium text-gray-700 no-underline">
              Contact Us
            </Link>

            <Link
              to="/book-appointment"
              className="rounded-full px-6 py-2 font-medium text-white no-underline"
              style={{ backgroundColor: theme.green }}
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} style={{ color: theme.blue }} />
            ) : (
              <Menu size={24} style={{ color: theme.blue }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3">
            <Link to="/" className="block px-4 py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/service" className="block px-4 py-2" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link to="/review" className="block px-4 py-2" onClick={() => setIsMenuOpen(false)}>
              Reviews
            </Link>
            <Link to="/contact" className="block px-4 py-2" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>

            <Link
              to="/book-appointment"
              className="block text-center rounded-full px-6 py-3 text-white"
              style={{ backgroundColor: theme.green }}
              onClick={() => setIsMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
