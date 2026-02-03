import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          {/* Logo/Brand */}
          <Link 
            to="/" 
            className="flex items-center gap-3 no-underline"
          >
            <span
              className="text-3xl font-extrabold tracking-widest"
              style={{ color: theme.blue }}
            >
              NAAVIKA
            </span>

            <div className="hidden md:block leading-tight">
              <div
                className="text-sm font-semibold"
                style={{ color: theme.textDark }}
              >
                Hearing Health Clinic
              </div>
              <div
                className="text-xs text-gray-600"
              >
                Restore | Rediscover
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link 
              to="/" 
              className="font-medium text-blue-500 hover:text-blue-600 transition-colors no-underline"
            >
              Home
            </Link>
            <Link 
              to="/service" 
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors no-underline"
            >
              Solutions
            </Link>
            <Link 
              to="/team" 
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors no-underline"
            >
              Team
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors no-underline"
            >
              About Us
            </Link>
            <Link 
              to="/blog" 
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors no-underline"
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors no-underline"
            >
              Contact Us
            </Link>

            <Link
              to="/book-appointment"
              className="rounded-full px-6 py-2 font-medium text-white transition-all duration-300 border-none cursor-pointer no-underline inline-block"
              style={{ backgroundColor: theme.green }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#2d7a34";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = `0 4px 12px ${theme.green}40`;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = theme.green;
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
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
          <div className="lg:hidden mt-4 pb-4 space-y-3 animate-fadeIn">
            <Link 
              to="/" 
              className="block py-2 px-4 font-medium text-blue-500 hover:bg-gray-50 rounded-lg transition-colors no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/service" 
              className="block py-2 px-4 font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link 
              to="/team" 
              className="block py-2 px-4 font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link 
              to="/about" 
              className="block py-2 px-4 font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/blog" 
              className="block py-2 px-4 font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 px-4 font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>

            <Link
              to="/book-appointment"
              className="w-full rounded-full px-6 py-3 font-medium text-white transition-all duration-300 border-none cursor-pointer text-center block no-underline"
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