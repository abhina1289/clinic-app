import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import {
  Phone, Mail, MapPin, Shield, Award, Heart, Sparkles,
} from "lucide-react";
import BookingForm from "../components/BookingForm"; // ✅ Import the form component

const theme = {
  red: "#c92424",
  blue: "#4484c4",
  green: "#3a9f43",
  textDark: "#222",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const pulseVariants = {
  animate: { scale: [1, 1.05, 1], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } },
};

function BookAppointment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-20 right-10 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-200/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <motion.div className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg mb-6"
              style={{ border: `2px solid ${theme.blue}30` }}
              whileHover={{ scale: 1.05 }}>
              <Sparkles size={20} style={{ color: theme.green }} />
              <span className="text-sm font-semibold" style={{ color: theme.blue }}>Book Your Visit Today</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: theme.textDark }}>
              Schedule Your{" "}
              <span className="relative inline-block" style={{ color: theme.blue }}>
                Appointment
                <motion.div className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${theme.blue}, ${theme.green})` }}
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }} />
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take the first step towards better hearing health. Our expert audiologists are ready to help you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left — Info Cards */}
            <motion.div className="space-y-6"
              variants={containerVariants} initial="hidden" animate="visible">
              {[
                { icon: <Shield size={32} />, title: "Expert Care", description: "Certified audiologists with 15+ years experience", color: theme.blue, gradient: "from-blue-500 to-blue-600" },
                { icon: <Award size={32} />, title: "State-of-the-Art", description: "Latest diagnostic equipment and hearing aids", color: theme.green, gradient: "from-green-500 to-green-600" },
                { icon: <Heart size={32} />, title: "Personalized Service", description: "Customized treatment plans for your needs", color: theme.red, gradient: "from-red-500 to-red-600" },
              ].map((feature, index) => (
                <motion.div key={index} variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-white rounded-2xl p-6 shadow-xl border"
                  style={{ borderColor: `${feature.color}20` }}>
                  <div className="flex items-start gap-4">
                    <motion.div className={`p-4 rounded-xl bg-gradient-to-br ${feature.gradient} text-white`}
                      whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                      {feature.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: theme.textDark }}>{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Stats */}
              {/* <motion.div variants={itemVariants} className="rounded-2xl p-8 text-white"
                style={{ background: `linear-gradient(135deg, ${theme.blue}, ${theme.blue}dd)` }}>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { value: "5000+", label: "Happy Patients" },
                    { value: "98%", label: "Success Rate" },
                    { value: "15+", label: "Specialists" },
                  ].map((stat, i) => (
                    <div key={i}>
                      <motion.div className="text-4xl font-bold mb-1"
                        variants={pulseVariants} animate="animate"
                        transition={{ delay: i * 0.2 }}>
                        {stat.value}
                      </motion.div>
                      <div className="text-white/80 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div> */}

              {/* Contact Info */}
              <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4" style={{ color: theme.textDark }}>Need Help?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone size={20} style={{ color: theme.green }} />
                    <span>+91 8123379944</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail size={20} style={{ color: theme.blue }} />
                    <span>info@naavikahearing.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin size={20} style={{ color: theme.red }} />
                    <span>Naavika Hearing Health Clinic , Kothnur Dinne Main Rd Bengaluru, Karnataka-560078</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right — BookingForm Component */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}>
              {/* ✅ BookingForm component used here */}
              <BookingForm />

              {/* Trust Badges */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-6 flex flex-wrap items-center justify-center gap-4">
                {[
                  { text: "🔒 Secure Booking", color: theme.green },
                  { text: "⚡ Quick Process", color: theme.blue },
                  { text: "💯 100% Safe", color: theme.red },
                ].map((badge, index) => (
                  <motion.div key={index}
                    className="px-4 py-2 bg-white rounded-full shadow-md text-sm font-semibold"
                    whileHover={{ scale: 1.05, y: -2 }}
                    style={{ color: badge.color }}>
                    {badge.text}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Buttons — Desktop */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-5">
        <a href="tel:+918123379944"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-red-600 text-white shadow-xl hover:scale-110 hover:ring-4 hover:ring-red-300 transition-all duration-300 animate-pulse"
          title="Call Us">
          <Phone size={24} />
          <span className="absolute right-16 opacity-0 group-hover:opacity-100 bg-red-600 text-white text-sm px-3 py-1 rounded-md whitespace-nowrap transition">Call Us</span>
        </a>
        <a href="https://wa.me/918123379944" target="_blank" rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-xl hover:scale-110 hover:ring-4 hover:ring-green-300 transition-all duration-300 animate-pulse"
          title="WhatsApp">
          <FaWhatsapp size={26} />
          <span className="absolute right-16 opacity-0 group-hover:opacity-100 bg-green-500 text-white text-sm px-3 py-1 rounded-md whitespace-nowrap transition">WhatsApp</span>
        </a>
      </div>

      {/* Floating Buttons — Mobile */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 md:hidden">
        <a href="tel:+918123379944"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white shadow-xl hover:scale-110 transition-all duration-300 animate-pulse">
          <Phone size={22} />
        </a>
        <a href="https://wa.me/918123379944" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-xl hover:scale-110 transition-all duration-300 animate-pulse">
          <FaWhatsapp size={24} />
        </a>
      </div>
    </div>
  );
}

export default BookAppointment;