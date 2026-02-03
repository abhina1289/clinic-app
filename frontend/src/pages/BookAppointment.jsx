import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  Stethoscope,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Heart,
  Shield,
  Award,
  MapPin,
  Bell
} from 'lucide-react';

function BookAppointment() {
  const theme = {
    red: "#c92424",
    blue: "#4484c4",
    green: "#3a9f43",
    lightBg: "#f9fafb",
    textDark: "#222",
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    bookingDate: '',
    appointmentWith: '',
    appointmentFor: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const audiologists = [
    'Dr. Sarah Johnson - Senior Audiologist',
    'Dr. Michael Chen - Pediatric Specialist',
    'Dr. Emily Rodriguez - Hearing Aid Expert',
    'Dr. James Wilson - Tinnitus Specialist'
  ];

  const appointmentTypes = [
    'Hearing Assessment',
    'Hearing Aid Fitting',
    'Hearing Aid Adjustment',
    'Tinnitus Consultation',
    'Follow-up Visit',
    'Pediatric Hearing Test',
    'Ear Wax Removal',
    'Hearing Aid Repair'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.bookingDate) newErrors.bookingDate = 'Booking date is required';
    if (!formData.appointmentWith) newErrors.appointmentWith = 'Please select an audiologist';
    if (!formData.appointmentFor) newErrors.appointmentFor = 'Please select appointment type';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        bookingDate: '',
        appointmentWith: '',
        appointmentFor: ''
      });
    }, 3000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-200/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg mb-6"
              style={{ border: `2px solid ${theme.blue}30` }}
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles size={20} style={{ color: theme.green }} />
              <span className="text-sm font-semibold" style={{ color: theme.blue }}>
                Book Your Visit Today
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: theme.textDark }}>
              Schedule Your{' '}
              <span
                className="relative inline-block"
                style={{ color: theme.blue }}
              >
                Appointment
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${theme.blue}, ${theme.green})`
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take the first step towards better hearing health. Our expert audiologists are ready to help you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - Features & Info */}
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Why Choose Us Cards */}
              {[
                {
                  icon: <Shield size={32} />,
                  title: 'Expert Care',
                  description: 'Certified audiologists with 10+ years experience',
                  color: theme.blue,
                  gradient: 'from-blue-500 to-blue-600'
                },
                {
                  icon: <Award size={32} />,
                  title: 'State-of-the-Art',
                  description: 'Latest diagnostic equipment and technology',
                  color: theme.green,
                  gradient: 'from-green-500 to-green-600'
                },
                {
                  icon: <Heart size={32} />,
                  title: 'Personalized Service',
                  description: 'Customized treatment plans for your needs',
                  color: theme.red,
                  gradient: 'from-red-500 to-red-600'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-white rounded-2xl p-6 shadow-xl border"
                  style={{ borderColor: `${feature.color}20` }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`p-4 rounded-xl bg-gradient-to-br ${feature.gradient} text-white`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: theme.textDark }}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Quick Stats */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br rounded-2xl p-8 text-white"
                style={{
                  background: `linear-gradient(135deg, ${theme.blue}, ${theme.blue}dd)`
                }}
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <motion.div
                      className="text-4xl font-bold mb-1"
                      variants={pulseVariants}
                      animate="animate"
                    >
                      5000+
                    </motion.div>
                    <div className="text-white/80 text-sm">Happy Patients</div>
                  </div>
                  <div>
                    <motion.div
                      className="text-4xl font-bold mb-1"
                      variants={pulseVariants}
                      animate="animate"
                      transition={{ delay: 0.2 }}
                    >
                      98%
                    </motion.div>
                    <div className="text-white/80 text-sm">Success Rate</div>
                  </div>
                  <div>
                    <motion.div
                      className="text-4xl font-bold mb-1"
                      variants={pulseVariants}
                      animate="animate"
                      transition={{ delay: 0.4 }}
                    >
                      15+
                    </motion.div>
                    <div className="text-white/80 text-sm">Specialists</div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: theme.textDark }}>
                  Need Help?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone size={20} style={{ color: theme.green }} />
                    <span>+1 (234) 567-8900</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail size={20} style={{ color: theme.blue }} />
                    <span>info@naavikaclinic.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin size={20} style={{ color: theme.red }} />
                    <span>123 Health Street, Bangalore</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2" style={{ borderColor: `${theme.blue}20` }}>
                {/* Form Header */}
                <div
                  className="p-8 text-white relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${theme.blue}, ${theme.green})`
                  }}
                >
                  <motion.div
                    className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 0]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, -90, 0]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="relative z-10 flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Calendar size={32} />
                    </motion.div>
                    <div>
                      <h2 className="text-3xl font-bold">Book Appointment</h2>
                      <p className="text-white/80 mt-1">Fill in your details below</p>
                    </div>
                  </div>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  <AnimatePresence mode="wait">
                    {showSuccess ? (
                      <motion.div
                        key="success"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="text-center py-12"
                      >
                        <motion.div
                          className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6"
                          style={{ backgroundColor: `${theme.green}20` }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1 }}
                        >
                          <CheckCircle size={48} style={{ color: theme.green }} />
                        </motion.div>
                        <h3 className="text-2xl font-bold mb-2" style={{ color: theme.green }}>
                          Appointment Booked!
                        </h3>
                        <p className="text-gray-600">
                          We'll send you a confirmation email shortly.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-6"
                      >
                        {/* Name & Phone Row */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                              <User size={16} style={{ color: theme.blue }} />
                              Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Enter your full name"
                              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all ${
                                errors.name
                                  ? 'border-red-300 focus:border-red-500'
                                  : 'border-gray-200 focus:border-blue-500'
                              }`}
                            />
                            {errors.name && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-500 text-xs"
                              >
                                {errors.name}
                              </motion.p>
                            )}
                          </motion.div>

                          <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                              <Phone size={16} style={{ color: theme.green }} />
                              Phone <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="Enter phone number"
                              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all ${
                                errors.phone
                                  ? 'border-red-300 focus:border-red-500'
                                  : 'border-gray-200 focus:border-blue-500'
                              }`}
                            />
                            {errors.phone && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-500 text-xs"
                              >
                                {errors.phone}
                              </motion.p>
                            )}
                          </motion.div>
                        </div>

                        {/* Email & Date Row */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                              <Mail size={16} style={{ color: theme.red }} />
                              Email <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="Enter your email"
                              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all ${
                                errors.email
                                  ? 'border-red-300 focus:border-red-500'
                                  : 'border-gray-200 focus:border-blue-500'
                              }`}
                            />
                            {errors.email && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-500 text-xs"
                              >
                                {errors.email}
                              </motion.p>
                            )}
                          </motion.div>

                          <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                              <Calendar size={16} style={{ color: theme.blue }} />
                              Booking Date <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="date"
                              name="bookingDate"
                              value={formData.bookingDate}
                              onChange={handleInputChange}
                              min={new Date().toISOString().split('T')[0]}
                              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all ${
                                errors.bookingDate
                                  ? 'border-red-300 focus:border-red-500'
                                  : 'border-gray-200 focus:border-blue-500'
                              }`}
                            />
                            {errors.bookingDate && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-500 text-xs"
                              >
                                {errors.bookingDate}
                              </motion.p>
                            )}
                          </motion.div>
                        </div>

                        {/* Appointment With */}
                        <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                            <Stethoscope size={16} style={{ color: theme.green }} />
                            Appointment With <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="appointmentWith"
                            value={formData.appointmentWith}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all appearance-none bg-white ${
                              errors.appointmentWith
                                ? 'border-red-300 focus:border-red-500'
                                : 'border-gray-200 focus:border-blue-500'
                            }`}
                          >
                            <option value="">Select Audiologist</option>
                            {audiologists.map((audiologist, index) => (
                              <option key={index} value={audiologist}>
                                {audiologist}
                              </option>
                            ))}
                          </select>
                          {errors.appointmentWith && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-xs"
                            >
                              {errors.appointmentWith}
                            </motion.p>
                          )}
                        </motion.div>

                        {/* Appointment For */}
                        <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                            <Clock size={16} style={{ color: theme.red }} />
                            Appointment For <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="appointmentFor"
                            value={formData.appointmentFor}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all appearance-none bg-white ${
                              errors.appointmentFor
                                ? 'border-red-300 focus:border-red-500'
                                : 'border-gray-200 focus:border-blue-500'
                            }`}
                          >
                            <option value="">Select Appointment Type</option>
                            {appointmentTypes.map((type, index) => (
                              <option key={index} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                          {errors.appointmentFor && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-xs"
                            >
                              {errors.appointmentFor}
                            </motion.p>
                          )}
                        </motion.div>

                        {/* Submit Button */}
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 rounded-xl font-bold text-lg text-white flex items-center justify-center gap-3 transition-all"
                          style={{
                            background: isSubmitting
                              ? '#9ca3af'
                              : `linear-gradient(135deg, ${theme.blue}, ${theme.green})`
                          }}
                          whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                        >
                          {isSubmitting ? (
                            <>
                              <motion.div
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              />
                              Booking...
                            </>
                          ) : (
                            <>
                              Book Appointment
                              <ArrowRight size={20} />
                            </>
                          )}
                        </motion.button>

                        {/* Additional Info */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="flex items-start gap-2 p-4 bg-blue-50 rounded-xl"
                        >
                          <Bell size={20} style={{ color: theme.blue }} className="flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-600">
                            You'll receive a confirmation email with appointment details within 24 hours.
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-6 flex flex-wrap items-center justify-center gap-4"
              >
                {[
                  { text: '🔒 Secure Booking', color: theme.green },
                  { text: '⚡ Instant Confirmation', color: theme.blue },
                  { text: '💯 100% Safe', color: theme.red }
                ].map((badge, index) => (
                  <motion.div
                    key={index}
                    className="px-4 py-2 bg-white rounded-full shadow-md text-sm font-semibold"
                    whileHover={{ scale: 1.05, y: -2 }}
                    style={{ color: badge.color }}
                  >
                    {badge.text}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;