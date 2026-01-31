import React, { useState } from 'react';
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

import '../components/Home.css';

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
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundColor: theme.lightBg }}>
        <div className="container">
          <div className="row align-items-center">
            <motion.div 
              className="col-lg-5"
              initial="hidden"
              animate="visible"
              variants={fadeInLeft}
            >
              <div className="appointment-form" style={{ 
                backgroundColor: '#ffffff',
                border: `1px solid ${theme.blue}20`
              }}>
                <div className="form-header" style={{ 
                  background: `linear-gradient(135deg, ${theme.blue}, ${theme.blue}dd)`,
                  color: '#ffffff'
                }}>
                  <Calendar className="form-icon" />
                  <h3 className="form-title" style={{ color: '#ffffff' }}>Book Appointment</h3>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <div className="input-group">
                      <span className="input-icon" style={{ color: theme.blue }}>
                        <User size={18} />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name*"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        style={{ borderColor: `${theme.blue}40` }}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <select
                      className="form-select"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                      style={{ 
                        borderColor: `${theme.blue}40`,
                        color: theme.textDark
                      }}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <div className="input-group">
                      <span className="input-icon" style={{ color: theme.blue }}>
                        <Mail size={18} />
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address*"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        style={{ borderColor: `${theme.blue}40` }}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="input-group">
                      <span className="input-icon" style={{ color: theme.blue }}>
                        <Phone size={18} />
                      </span>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone Number*"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        style={{ borderColor: `${theme.blue}40` }}
                      />
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-submit w-100"
                    style={{ 
                      backgroundColor: theme.red,
                      borderColor: theme.red,
                      color: '#ffffff'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#a51d1d'}
                    onMouseOut={(e) => e.target.style.backgroundColor = theme.red}
                  >
                    Book Now <ArrowRight size={18} className="ms-2" />
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.div 
              className="col-lg-7"
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
            >
              <div className="hero-content">
                <motion.div 
                  className="badge-wrapper"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="hero-badge" style={{ 
                    backgroundColor: `${theme.green}15`,
                    color: theme.green,
                    border: `1px solid ${theme.green}`
                  }}>
                    <Award size={16} /> Trusted Healthcare
                  </span>
                </motion.div>
                <h1 className="hero-title" style={{ color: theme.textDark }}>
                  The Best Medical & Treatment Center for You
                </h1>
                <p className="hero-subtitle" style={{ color: `${theme.textDark}99` }}>
                  Experience world-class healthcare with our team of expert doctors 
                  and state-of-the-art facilities.
                </p>
                <div className="hero-features">
                  <div className="feature-item" style={{ color: theme.green }}>
                    <CheckCircle size={20} />
                    <span style={{ color: theme.textDark }}>24/7 Emergency Care</span>
                  </div>
                  <div className="feature-item" style={{ color: theme.green }}>
                    <CheckCircle size={20} />
                    <span style={{ color: theme.textDark }}>Expert Specialists</span>
                  </div>
                  <div className="feature-item" style={{ color: theme.green }}>
                    <CheckCircle size={20} />
                    <span style={{ color: theme.textDark }}>Modern Equipment</span>
                  </div>
                </div>
                <div className="hero-buttons">
                  <button 
                    className="btn btn-learn-more"
                    style={{ 
                      backgroundColor: theme.blue,
                      borderColor: theme.blue,
                      color: '#ffffff'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#3a6fa0'}
                    onMouseOut={(e) => e.target.style.backgroundColor = theme.blue}
                  >
                    Learn More <ArrowRight size={18} className="ms-2" />
                  </button>
                  <button 
                    className="btn btn-contact"
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
                    <Phone size={18} className="me-2" /> Contact Us
                  </button>
                </div>
              </div>
              <div className="hero-image">
                <motion.img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=700&fit=crop" 
                  alt="Medical Professional" 
                  className="doctor-image"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="floating-card card-1" style={{ 
                  backgroundColor: '#ffffff',
                  boxShadow: `0 10px 30px ${theme.blue}20`
                }}>
                  <Heart className="card-icon" style={{ color: theme.red }} />
                  <div>
                    <h4 style={{ color: theme.textDark }}>98%</h4>
                    <p style={{ color: `${theme.textDark}99` }}>Success Rate</p>
                  </div>
                </div>
                <div className="floating-card card-2" style={{ 
                  backgroundColor: '#ffffff',
                  boxShadow: `0 10px 30px ${theme.green}20`
                }}>
                  <Users className="card-icon" style={{ color: theme.green }} />
                  <div>
                    <h4 style={{ color: theme.textDark }}>5000+</h4>
                    <p style={{ color: `${theme.textDark}99` }}>Happy Patients</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <motion.section 
        className="stats-bar"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        style={{ 
          background: `linear-gradient(135deg, ${theme.blue}, ${theme.blue}dd)`,
        }}
      >
        <div className="container">
          <div className="row">
            <motion.div className="col-lg-3 col-md-6 mb-3 mb-lg-0" variants={scaleIn}>
              <div className="stat-item">
                <div className="stat-icon" style={{ color: '#ffffff' }}>
                  <Users size={32} />
                </div>
                <div className="stat-content">
                  <h3 className="stat-number" style={{ color: '#ffffff' }}>600+</h3>
                  <p className="stat-label" style={{ color: '#ffffffcc' }}>Patients Treated</p>
                </div>
              </div>
            </motion.div>
            <motion.div className="col-lg-3 col-md-6 mb-3 mb-lg-0" variants={scaleIn}>
              <div className="stat-item">
                <div className="stat-icon" style={{ color: '#ffffff' }}>
                  <Stethoscope size={32} />
                </div>
                <div className="stat-content">
                  <h3 className="stat-number" style={{ color: '#ffffff' }}>30+</h3>
                  <p className="stat-label" style={{ color: '#ffffffcc' }}>Expert Doctors</p>
                </div>
              </div>
            </motion.div>
            <motion.div className="col-lg-3 col-md-6 mb-3 mb-lg-0" variants={scaleIn}>
              <div className="stat-item">
                <div className="stat-icon" style={{ color: '#ffffff' }}>
                  <Award size={32} />
                </div>
                <div className="stat-content">
                  <h3 className="stat-number" style={{ color: '#ffffff' }}>60+</h3>
                  <p className="stat-label" style={{ color: '#ffffffcc' }}>Years Experience</p>
                </div>
              </div>
            </motion.div>
            <motion.div className="col-lg-3 col-md-6" variants={scaleIn}>
              <div className="stat-item">
                <div className="stat-icon" style={{ color: '#ffffff' }}>
                  <Star size={32} />
                </div>
                <div className="stat-content">
                  <h3 className="stat-number" style={{ color: '#ffffff' }}>4.9/5</h3>
                  <p className="stat-label" style={{ color: '#ffffffcc' }}>Patient Rating</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        className="about-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <motion.div className="about-image-wrapper" variants={fadeInLeft}>
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop" 
                  alt="Medical Center" 
                  className="about-main-image"
                />
                <div className="about-badge" style={{ 
                  backgroundColor: theme.green,
                  color: '#ffffff'
                }}>
                  <Shield size={24} />
                  <span>Certified Healthcare</span>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div variants={fadeInRight}>
                <span className="section-subtitle" style={{ color: theme.red }}>
                  <Heart size={18} /> About Us
                </span>
                <h2 className="section-title" style={{ color: theme.textDark }}>
                  About Our Center MindCare
                </h2>
                <p className="about-text" style={{ color: `${theme.textDark}99` }}>
                  We provide comprehensive medical care with state-of-the-art facilities and 
                  experienced medical professionals. Our mission is to deliver exceptional 
                  healthcare services with compassion and excellence.
                </p>
                <div className="about-features">
                  <div className="about-feature">
                    <Activity className="feature-icon" style={{ color: theme.blue }} />
                    <div>
                      <h5 style={{ color: theme.textDark }}>Advanced Technology</h5>
                      <p style={{ color: `${theme.textDark}99` }}>Latest medical equipment and diagnostic tools</p>
                    </div>
                  </div>
                  <div className="about-feature">
                    <Shield className="feature-icon" style={{ color: theme.green }} />
                    <div>
                      <h5 style={{ color: theme.textDark }}>Patient Safety</h5>
                      <p style={{ color: `${theme.textDark}99` }}>Highest standards of safety and hygiene</p>
                    </div>
                  </div>
                  <div className="about-feature">
                    <Clock className="feature-icon" style={{ color: theme.red }} />
                    <div>
                      <h5 style={{ color: theme.textDark }}>24/7 Support</h5>
                      <p style={{ color: `${theme.textDark}99` }}>Round-the-clock emergency services</p>
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
        className="specialists-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        style={{ backgroundColor: theme.lightBg }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <motion.span className="section-subtitle" style={{ color: theme.blue }} variants={fadeInUp}>
              <Stethoscope size={18} /> Our Team
            </motion.span>
            <motion.h2 className="section-title" style={{ color: theme.textDark }} variants={fadeInUp}>
              Expert Specialists
            </motion.h2>
            <motion.p className="section-description" style={{ color: `${theme.textDark}99` }} variants={fadeInUp}>
              Meet our team of highly qualified medical professionals
            </motion.p>
          </div>
          <div className="row">
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
                className="col-lg-3 col-md-6 mb-4" 
                key={index}
                variants={scaleIn}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="doctor-card" style={{ 
                  backgroundColor: '#ffffff',
                  border: `1px solid ${theme.blue}20`
                }}>
                  <div className="doctor-image-wrapper">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="doctor-img"
                    />
                    <div className="doctor-rating" style={{ 
                      backgroundColor: theme.green,
                      color: '#ffffff'
                    }}>
                      <Star size={14} fill="currentColor" />
                      <span>{doctor.rating}</span>
                    </div>
                  </div>
                  <div className="doctor-info">
                    <h4 className="doctor-name" style={{ color: theme.textDark }}>
                      {doctor.name}
                    </h4>
                    <p className="doctor-specialty" style={{ color: theme.blue }}>
                      <Stethoscope size={16} /> {doctor.specialty}
                    </p>
                    <div className="doctor-stats" style={{ color: `${theme.textDark}99` }}>
                      <span>
                        <Users size={14} /> {doctor.patients} Patients
                      </span>
                    </div>
                    <button 
                      className="btn btn-view-profile"
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
                      View Profile <ArrowRight size={16} className="ms-2" />
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
        className="services-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <motion.div variants={fadeInLeft}>
                <span className="section-subtitle" style={{ color: theme.green }}>
                  <Activity size={18} /> Our Services
                </span>
                <h2 className="section-title" style={{ color: theme.textDark }}>
                  Premium Healthcare Services
                </h2>
                <p className="services-text" style={{ color: `${theme.textDark}99` }}>
                  We offer a comprehensive range of medical services with cutting-edge technology 
                  and experienced healthcare professionals dedicated to your well-being.
                </p>
                <ul className="services-list" style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ 
                    marginBottom: '15px', 
                    display: 'flex', 
                    alignItems: 'center',
                    color: theme.textDark
                  }}>
                    <Ambulance size={20} style={{ color: theme.red, marginRight: '12px' }} />
                    <span>24/7 Emergency Care</span>
                  </li>
                  <li style={{ 
                    marginBottom: '15px', 
                    display: 'flex', 
                    alignItems: 'center',
                    color: theme.textDark
                  }}>
                    <Activity size={20} style={{ color: theme.blue, marginRight: '12px' }} />
                    <span>Advanced Diagnostic Services</span>
                  </li>
                  <li style={{ 
                    marginBottom: '15px', 
                    display: 'flex', 
                    alignItems: 'center',
                    color: theme.textDark
                  }}>
                    <Heart size={20} style={{ color: theme.red, marginRight: '12px' }} />
                    <span>Specialized Treatment Programs</span>
                  </li>
                  <li style={{ 
                    marginBottom: '15px', 
                    display: 'flex', 
                    alignItems: 'center',
                    color: theme.textDark
                  }}>
                    <Shield size={20} style={{ color: theme.green, marginRight: '12px' }} />
                    <span>Preventive Healthcare</span>
                  </li>
                  <li style={{ 
                    marginBottom: '15px', 
                    display: 'flex', 
                    alignItems: 'center',
                    color: theme.textDark
                  }}>
                    <Users size={20} style={{ color: theme.blue, marginRight: '12px' }} />
                    <span>Patient-Centered Care</span>
                  </li>
                </ul>
                <button 
                  className="btn btn-services"
                  style={{ 
                    backgroundColor: theme.blue,
                    borderColor: theme.blue,
                    color: '#ffffff'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#3a6fa0'}
                  onMouseOut={(e) => e.target.style.backgroundColor = theme.blue}
                >
                  View All Services <ArrowRight size={18} className="ms-2" />
                </button>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div 
                className="services-image-wrapper"
                variants={fadeInRight}
              >
                <img 
                  src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop" 
                  alt="Medical Services" 
                  className="services-main-image"
                />
                <div className="service-card" style={{ 
                  backgroundColor: '#ffffff',
                  boxShadow: `0 10px 30px ${theme.red}20`
                }}>
                  <Clock size={28} style={{ color: theme.red }} />
                  <div>
                    <h4 style={{ color: theme.textDark }}>Quick Appointment</h4>
                    <p style={{ color: `${theme.textDark}99` }}>Book instantly online</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="contact-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        style={{ backgroundColor: theme.lightBg }}
      >
        <div className="container">
          <div className="contact-wrapper" style={{ 
            background: `linear-gradient(135deg, ${theme.red}, ${theme.red}dd)`,
            borderRadius: '20px',
            padding: '50px'
          }}>
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h2 className="contact-title" style={{ color: '#ffffff' }}>
                  Ready to Get Started?
                </h2>
                <p className="contact-text" style={{ color: '#ffffffcc' }}>
                  Book your appointment today and experience world-class healthcare services.
                </p>
              </div>
              <div className="col-lg-6 text-lg-end">
                <button 
                  className="btn btn-contact-large"
                  style={{ 
                    backgroundColor: '#ffffff',
                    borderColor: '#ffffff',
                    color: theme.red,
                    marginRight: '10px'
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
                  <Phone size={20} className="me-2" /> Call: +1 (234) 567-8900
                </button>
                <button 
                  className="btn btn-appointment-large"
                  style={{ 
                    backgroundColor: theme.blue,
                    borderColor: theme.blue,
                    color: '#ffffff'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#3a6fa0'}
                  onMouseOut={(e) => e.target.style.backgroundColor = theme.blue}
                >
                  <Calendar size={20} className="me-2" /> Book Appointment
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