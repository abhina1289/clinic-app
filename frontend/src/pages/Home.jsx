import { useState } from "react";
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Heart, 
  Award, 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  User, 
  Shield, 
  Activity,
  Stethoscope,
  Ambulance,
  Users,
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react';

function Home() {
  // Naavika Theme
  const theme = {
    red: "#c92424",
    blue: "#4484c4",
    green: "#3a9f43",
    lightBg: "#f9fafb",
    textDark: "#222",
  };

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Appointment booked successfully!');
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Appointment Form */}
            <motion.div 
              className="w-full lg:w-5/12"
              initial="hidden"
              animate="visible"
              variants={fadeInLeft}
            >
              <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
                <div 
                  className="p-6 flex items-center gap-3"
                  style={{ 
                    background: `linear-gradient(135deg, ${theme.blue}, ${theme.blue}dd)`,
                  }}
                >
                  <Calendar className="text-white" size={24} />
                  <h3 className="text-xl font-bold text-white">Book Appointment</h3>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: theme.blue }}>
                        <User size={18} />
                      </span>
                      <input
                        type="text"
                        className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="Full Name*"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <select
                      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-800"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: theme.blue }}>
                        <Mail size={18} />
                      </span>
                      <input
                        type="email"
                        className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="Email Address*"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: theme.blue }}>
                        <Phone size={18} />
                      </span>
                      <input
                        type="tel"
                        className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="Phone Number*"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                    style={{ backgroundColor: theme.red, color: '#ffffff' }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#a51d1d'}
                    onMouseOut={(e) => e.target.style.backgroundColor = theme.red}
                  >
                    Book Now <ArrowRight size={18} />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Hero Content */}
            <motion.div 
              className="w-full lg:w-7/12"
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
            >
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border"
                    style={{ 
                      backgroundColor: `${theme.green}15`,
                      color: theme.green,
                      borderColor: theme.green
                    }}
                  >
                    <Award size={16} /> Trusted Healthcare
                  </span>
                </motion.div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight" style={{ color: theme.textDark }}>
                  The Best Medical & Treatment Center for You
                </h1>
                <p className="text-lg text-gray-600">
                  Experience world-class healthcare with our team of expert doctors 
                  and state-of-the-art facilities.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle size={20} style={{ color: theme.green }} />
                    <span className="text-gray-800">24/7 Emergency Care</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={20} style={{ color: theme.green }} />
                    <span className="text-gray-800">Expert Specialists</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={20} style={{ color: theme.green }} />
                    <span className="text-gray-800">Modern Equipment</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button 
                    className="px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2"
                    style={{ 
                      backgroundColor: theme.blue,
                      color: '#ffffff'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#3a6fa0'}
                    onMouseOut={(e) => e.target.style.backgroundColor = theme.blue}
                  >
                    Learn More <ArrowRight size={18} />
                  </button>
                  <button 
                    className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 border-2"
                    style={{ 
                      backgroundColor: 'transparent',
                      borderColor: theme.red,
                      color: theme.red
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = theme.red;
                      e.target.style.color = '#ffffff';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = theme.red;
                    }}
                  >
                    <Phone size={18} /> Contact Us
                  </button>
                </div>
              </div>
              <div className="relative mt-12">
                <motion.img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=700&fit=crop" 
                  alt="Medical Professional" 
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:mx-0"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <div 
                  className="absolute top-8 -right-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3"
                  style={{ boxShadow: `0 10px 30px ${theme.blue}20` }}
                >
                  <Heart className="w-8 h-8" style={{ color: theme.red }} />
                  <div>
                    <h4 className="text-2xl font-bold" style={{ color: theme.textDark }}>98%</h4>
                    <p className="text-sm text-gray-600">Success Rate</p>
                  </div>
                </div>
                <div 
                  className="absolute bottom-8 -left-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3"
                  style={{ boxShadow: `0 10px 30px ${theme.green}20` }}
                >
                  <Users className="w-8 h-8" style={{ color: theme.green }} />
                  <div>
                    <h4 className="text-2xl font-bold" style={{ color: theme.textDark }}>5000+</h4>
                    <p className="text-sm text-gray-600">Happy Patients</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <motion.section 
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        style={{ 
          background: `linear-gradient(135deg, ${theme.blue}, ${theme.blue}dd)`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div variants={scaleIn}>
              <div className="flex items-center gap-4">
                <div className="text-white">
                  <Users size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">600+</h3>
                  <p className="text-white/80">Patients Treated</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={scaleIn}>
              <div className="flex items-center gap-4">
                <div className="text-white">
                  <Stethoscope size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">30+</h3>
                  <p className="text-white/80">Expert Doctors</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={scaleIn}>
              <div className="flex items-center gap-4">
                <div className="text-white">
                  <Award size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">60+</h3>
                  <p className="text-white/80">Years Experience</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={scaleIn}>
              <div className="flex items-center gap-4">
                <div className="text-white">
                  <Star size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">4.9/5</h3>
                  <p className="text-white/80">Patient Rating</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        className="py-16 lg:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <motion.div className="relative" variants={fadeInLeft}>
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop" 
                  alt="Medical Center" 
                  className="rounded-2xl shadow-xl w-full"
                />
                <div 
                  className="absolute bottom-6 left-6 rounded-xl p-4 flex items-center gap-3"
                  style={{ 
                    backgroundColor: theme.green,
                    color: '#ffffff'
                  }}
                >
                  <Shield size={24} />
                  <span className="font-semibold">Certified Healthcare</span>
                </div>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2">
              <motion.div variants={fadeInRight} className="space-y-6">
                <span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: theme.red }}>
                  <Heart size={18} /> About Us
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: theme.textDark }}>
                  About Our Center MindCare
                </h2>
                <p className="text-gray-600 text-lg">
                  We provide comprehensive medical care with state-of-the-art facilities and 
                  experienced medical professionals. Our mission is to deliver exceptional 
                  healthcare services with compassion and excellence.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Activity className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: theme.blue }} />
                    <div>
                      <h5 className="font-bold mb-1" style={{ color: theme.textDark }}>Advanced Technology</h5>
                      <p className="text-gray-600">Latest medical equipment and diagnostic tools</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Shield className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: theme.green }} />
                    <div>
                      <h5 className="font-bold mb-1" style={{ color: theme.textDark }}>Patient Safety</h5>
                      <p className="text-gray-600">Highest standards of safety and hygiene</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: theme.red }} />
                    <div>
                      <h5 className="font-bold mb-1" style={{ color: theme.textDark }}>24/7 Support</h5>
                      <p className="text-gray-600">Round-the-clock emergency services</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Specialists Section */}
      <motion.section 
        className="py-16 lg:py-24 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <motion.span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: theme.blue }} variants={fadeInUp}>
              <Stethoscope size={18} /> Our Team
            </motion.span>
            <motion.h2 className="text-3xl lg:text-4xl font-bold" style={{ color: theme.textDark }} variants={fadeInUp}>
              Expert Specialists
            </motion.h2>
            <motion.p className="text-gray-600 max-w-2xl mx-auto" variants={fadeInUp}>
              Meet our team of highly qualified medical professionals
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Dr. Michael Anderson',
                specialty: 'Cardiologist',
                image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop',
                rating: '4.9',
                patients: '1200+'
              },
              {
                name: 'Dr. Robert Wilson',
                specialty: 'Neurologist',
                image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop',
                rating: '4.8',
                patients: '980+'
              },
              {
                name: 'Dr. Chris Martin',
                specialty: 'Orthopedic Surgeon',
                image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop',
                rating: '5.0',
                patients: '1500+'
              },
              {
                name: 'Dr. Sarah Parker',
                specialty: 'Pediatrician',
                image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop',
                rating: '4.9',
                patients: '2000+'
              }
            ].map((doctor, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-blue-100">
                  <div className="relative">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="w-full h-64 object-cover"
                    />
                    <div 
                      className="absolute top-4 right-4 px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold"
                      style={{ 
                        backgroundColor: theme.green,
                        color: '#ffffff'
                      }}
                    >
                      <Star size={14} fill="currentColor" />
                      <span>{doctor.rating}</span>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h4 className="text-xl font-bold" style={{ color: theme.textDark }}>
                      {doctor.name}
                    </h4>
                    <p className="flex items-center gap-2 font-semibold" style={{ color: theme.blue }}>
                      <Stethoscope size={16} /> {doctor.specialty}
                    </p>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Users size={14} /> {doctor.patients} Patients
                    </div>
                    <button 
                      className="w-full py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 border-2"
                      style={{ 
                        backgroundColor: 'transparent',
                        borderColor: theme.red,
                        color: theme.red
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = theme.red;
                        e.target.style.color = '#ffffff';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = theme.red;
                      }}
                    >
                      View Profile <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="py-16 lg:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: theme.green }}>
                  <Activity size={18} /> Our Services
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: theme.textDark }}>
                  Premium Healthcare Services
                </h2>
                <p className="text-gray-600 text-lg">
                  We offer a comprehensive range of medical services with cutting-edge technology 
                  and experienced healthcare professionals dedicated to your well-being.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Ambulance size={20} style={{ color: theme.red }} />
                    <span className="text-gray-800">24/7 Emergency Care</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Activity size={20} style={{ color: theme.blue }} />
                    <span className="text-gray-800">Advanced Diagnostic Services</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Heart size={20} style={{ color: theme.red }} />
                    <span className="text-gray-800">Specialized Treatment Programs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Shield size={20} style={{ color: theme.green }} />
                    <span className="text-gray-800">Preventive Healthcare</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users size={20} style={{ color: theme.blue }} />
                    <span className="text-gray-800">Patient-Centered Care</span>
                  </li>
                </ul>
                <button 
                  className="px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2 mt-6"
                  style={{ 
                    backgroundColor: theme.blue,
                    color: '#ffffff'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#3a6fa0'}
                  onMouseOut={(e) => e.target.style.backgroundColor = theme.blue}
                >
                  View All Services <ArrowRight size={18} />
                </button>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2">
              <motion.div 
                className="relative"
                variants={fadeInRight}
              >
                <img 
                  src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop" 
                  alt="Medical Services" 
                  className="rounded-2xl shadow-xl w-full"
                />
                <div 
                  className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 flex items-center gap-4"
                  style={{ boxShadow: `0 10px 30px ${theme.red}20` }}
                >
                  <Clock size={28} style={{ color: theme.red }} />
                  <div>
                    <h4 className="font-bold text-lg" style={{ color: theme.textDark }}>Quick Appointment</h4>
                    <p className="text-gray-600 text-sm">Book instantly online</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <div 
            className="rounded-3xl p-8 lg:p-12"
            style={{ 
              background: `linear-gradient(135deg, ${theme.red}, ${theme.red}dd)`,
            }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-white/80 text-lg">
                  Book your appointment today and experience world-class healthcare services.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
                <button 
                  className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
                  style={{ 
                    backgroundColor: '#ffffff',
                    color: theme.red,
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = theme.blue;
                    e.target.style.color = '#ffffff';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#ffffff';
                    e.target.style.color = theme.red;
                  }}
                >
                  <Phone size={20} /> Call: +1 (234) 567-8900
                </button>
                <button 
                  className="px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2"
                  style={{ 
                    backgroundColor: theme.blue,
                    color: '#ffffff'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#3a6fa0'}
                  onMouseOut={(e) => e.target.style.backgroundColor = theme.blue}
                >
                  <Calendar size={20} /> Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;