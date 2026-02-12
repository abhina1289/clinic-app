import React, { useState } from "react";
import {
  Calendar,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function NaavikaFooter() {
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const services = [
    "Hearing Tests & Assessments",
    "Hearing Aid ",
    "Hearing and Reprogramming",
    "Audiology Consultation",
    "Services & Repairs",
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/service" },
    { name: "Reviews", path: "/review" },
    { name: "Contact", path: "/contact" },
    { name: "Book Appointment", path: "/book-appointment" },
  ];

  const socialLinks = [
    { icon: Facebook },
    { icon: Instagram },
    { icon: Linkedin },
    { icon: Twitter },
  ];

  return (
    <footer
      className="text-white relative overflow-hidden"
      style={{
        backgroundColor: "#4484c4",
      }}
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="animate-float-slow absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="animate-float-medium absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="animate-float-fast absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4 animate-slide-up">
            <img
              src="/brands/Naavika Logo.png"
              alt="Icon"
              className="h-20 w-auto transition-transform duration-300 hover:scale-105"
            />
            {/* <h6>Naavika Hearing Health Clinc</h6> */}
            <p className="text-sm text-blue-100 leading-relaxed">
              Your trusted partner in hearing health. Providing comprehensive
              audiological care with cutting-edge technology and compassionate
              service.
            </p>

            <button
              className="group flex items-center space-x-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "#3a9f43" }}
            >
              <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <Link to={"/book-appointment"}>
                <span>Book Appointment</span>
              </Link>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Services */}
          <div className="space-y-4 animate-slide-up-delay-1">
            <h4 className="text-xl font-semibold border-b-2 border-[#3a9f43] pb-2 inline-block transition-all duration-300 hover:border-[#7ed957]">
              Our Services
            </h4>

            <ul className="space-y-2">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-2 cursor-pointer transform transition-all duration-300"
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  style={{
                    animation: `slideInRight 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <ChevronRight
                    className={`w-4 h-4 mt-1 text-[#7ed957] transition-all duration-300 ${
                      hoveredService === index ? "translate-x-1 scale-125" : ""
                    }`}
                  />
                  <span
                    className={`text-sm transition-all duration-300 ${
                      hoveredService === index
                        ? "text-white translate-x-1"
                        : "text-blue-100"
                    }`}
                  >
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-slide-up-delay-2">
            <h4 className="text-xl font-semibold border-b-2 border-[#3a9f43] pb-2 inline-block transition-all duration-300 hover:border-[#7ed957]">
              Quick Links
            </h4>

            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setHoveredLink(index)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{
                    animation: `slideIn 0.3s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center space-x-2 text-sm transition-all duration-300 ${
                      hoveredLink === index
                        ? "text-white translate-x-2"
                        : "text-[#eef6d8]"
                    }`}
                  >
                    <span
                      className={`h-0.5 bg-[#e6f2c2] transition-all duration-300 ${
                        hoveredLink === index ? "w-4" : "w-0"
                      }`}
                    />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 animate-slide-up-delay-3">
            <h4 className="text-xl font-semibold border-b-2 border-[#3a9f43] pb-2 inline-block transition-all duration-300 hover:border-[#7ed957]">
              Contact Us
            </h4>

            <div className="space-y-3 text-blue-100">
              <div className="flex items-start space-x-3 transition-all duration-300 hover:translate-x-1">
                <MapPin className="w-5 h-5 text-[#7ed957] animate-bounce-slow" />
                <p className="text-sm">
                  Medical College Road,
                  <br />
                  Thiruvananthapuram,
                  <br />
                  Kerala – 695011
                </p>
              </div>

              <div className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-1">
                <Phone className="w-5 h-5 text-[#7ed957] hover:rotate-12 transition-transform duration-300" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-white transition-colors duration-300"
                >
                  +91 98765 43210
                </a>
              </div>

              <div className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-1">
                <Mail className="w-5 h-5 text-[#7ed957] hover:scale-110 transition-transform duration-300" />
                <a
                  href="mailto:info@naavikahearing.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  info@naavikahearing.com
                </a>
              </div>

              {/* Social */}
              <div className="pt-4">
                <p className="text-sm font-semibold mb-2">Follow Us</p>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg"
                      style={{
                        backgroundColor:
                          hoveredSocial === index ? "#3a9f43" : "#3f86d9",
                        animation: `popIn 0.5s ease-out ${index * 0.1}s both`,
                      }}
                      onMouseEnter={() => setHoveredSocial(index)}
                      onMouseLeave={() => setHoveredSocial(null)}
                    >
                      <social.icon
                        className={`w-5 h-5 text-white transition-transform duration-300 ${hoveredSocial === index ? "rotate-12" : ""}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-300/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-blue-100">
          <p className="animate-fade-in">
            © 2026 Naavika Hearing Health Clinic. All rights reserved.
          </p>

          <div className="flex space-x-6 animate-fade-in-delay">
            <a
              href="#"
              className="hover:text-white transition-all duration-300 hover:scale-105"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-all duration-300 hover:scale-105"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-40px, -40px) rotate(180deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.1); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.6s ease-out 0.2s both;
        }
        
        .animate-slide-up {
          animation: slideUp 0.6s ease-out;
        }
        
        .animate-slide-up-delay-1 {
          animation: slideUp 0.6s ease-out 0.1s both;
        }
        
        .animate-slide-up-delay-2 {
          animation: slideUp 0.6s ease-out 0.2s both;
        }
        
        .animate-slide-up-delay-3 {
          animation: slideUp 0.6s ease-out 0.3s both;
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 15s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 10s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}
