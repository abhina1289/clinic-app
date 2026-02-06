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
      className="text-white"
      style={{
        background:
          "linear-gradient(135deg, #1e4fa3 0%, #2f6fc2 50%, #3f86d9 100%)",
      }}
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4 animate-fade-in">
            <img
              src="/images/naavika-logo.png"
              alt="Naavika Hearing Health Clinic"
              className="h-12 w-auto"
            />

            <p className="text-sm text-blue-100 leading-relaxed">
              Your trusted partner in hearing health. Providing comprehensive
              audiological care with cutting-edge technology and compassionate
              service.
            </p>

            <button
              className="group flex items-center space-x-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: "#3a9f43" }}
            >
              <Calendar className="w-5 h-5" />
              <Link to={"/book-appointment"}>
                <span>Book Appointment</span>
              </Link>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold border-b-2 border-[#3a9f43] pb-2 inline-block">
              Our Services
            </h4>

            <ul className="space-y-2">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-2 cursor-pointer"
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <ChevronRight
                    className={`w-4 h-4 mt-1 text-[#7ed957] transition-transform ${
                      hoveredService === index ? "translate-x-1" : ""
                    }`}
                  />
                  <span
                    className={`text-sm ${
                      hoveredService === index ? "text-white" : "text-blue-100"
                    }`}
                  >
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold border-b-2 border-[#3a9f43] pb-2 inline-block">
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
                    className={`flex items-center space-x-2 text-sm transition-all ${
                      hoveredLink === index
                        ? "text-white translate-x-2"
                        : "text-[#eef6d8]"
                    }`}
                  >
                    <span
                      className={`h-0.5 bg-[#e6f2c2] transition-all ${
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
          <div className="space-y-4">
            <h4 className="text-xl font-semibold border-b-2 border-[#3a9f43] pb-2 inline-block">
              Contact Us
            </h4>

            <div className="space-y-3 text-blue-100">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#7ed957]" />
                <p className="text-sm">
                  Medical College Road,
                  <br />
                  Thiruvananthapuram,
                  <br />
                  Kerala – 695011
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#7ed957]" />
                <a href="tel:+919876543210" className="hover:text-white">
                  +91 98765 43210
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#7ed957]" />
                <a
                  href="mailto:info@naavikahearing.com"
                  className="hover:text-white"
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
                      className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110"
                      style={{ backgroundColor: "#3f86d9" }}
                    >
                      <social.icon className="w-5 h-5 text-white" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-300/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-blue-100">
          <p>© 2026 Naavika Hearing Health Clinic. All rights reserved.</p>

          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </footer>
  );
}
