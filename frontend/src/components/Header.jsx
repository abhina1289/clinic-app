import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

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
  const navLinkClass = ({ isActive }) =>
    `font-medium no-underline transition-colors duration-300
   ${isActive ? "text-blue-500" : "text-gray-700 hover:text-blue-500"}`;

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
              src="/brands/Naavika Logo.png"
              alt="Naavika Logo"
              className="h-22 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/service" className={navLinkClass}>
              Services
            </NavLink>

            <NavLink to="/review" className={navLinkClass}>
              Reviews
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              Contact Us
            </NavLink>

            <NavLink
              to="/book-appointment"
              className="rounded-full px-6 py-2 font-medium text-white no-underline
               transition-transform duration-300 hover:scale-105"
              style={{ backgroundColor: theme.green }}
            >
              Book Appointment
            </NavLink>
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-4 py-2 font-medium transition-colors duration-300
     ${isActive ? "text-blue-500" : "text-gray-700 hover:text-blue-500"}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/service"
              className={({ isActive }) =>
                `block px-4 py-2 font-medium transition-colors duration-300
     ${isActive ? "text-blue-500" : "text-gray-700 hover:text-blue-500"}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </NavLink>

            <NavLink
              to="/review"
              className={({ isActive }) =>
                `block px-4 py-2 font-medium transition-colors duration-300
     ${isActive ? "text-blue-500" : "text-gray-700 hover:text-blue-500"}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-4 py-2 font-medium transition-colors duration-300
     ${isActive ? "text-blue-500" : "text-gray-700 hover:text-blue-500"}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </NavLink>

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
