import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Award,
  Shield,
  Users,
  Activity,
  Ear,
  Star,
  ArrowRight,
  Stethoscope,
  Clock,
  Settings,
  Wrench,
  CheckCircle,
  Target,
  Sparkles
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../components/About.css'

function Aboutus() {
  // Naavika Theme
  const theme = {
    red: "#c92424",
    blue: "#4484c4",
    green: "#3a9f43",
    lightBg: "#f9fafb",
    textDark: "#222",
  };

  /* 🔹 Animation Variants */
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
      transition: { staggerChildren: 0.2 }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="about-page" style={{ backgroundColor: theme.lightBg }}>

      {/* ================= HERO ================= */}
      <motion.section
        className="about-hero text-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        style={{
          padding: "80px 20px 60px",
          background: `linear-gradient(135deg, ${theme.blue}15, ${theme.lightBg})`,
        }}
      >
        <div className="container">
          <span 
            className="section-subtitle" 
            style={{ 
              color: theme.red,
              fontSize: "16px",
              fontWeight: "600",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "15px"
            }}
          >
            <Heart size={18} /> About Us
          </span>
          <h1 
            className="section-title" 
            style={{
              color: theme.textDark,
              fontSize: "48px",
              fontWeight: "700",
              marginBottom: "20px"
            }}
          >
            Naavika Hearing Health Clinic
          </h1>
          <p 
            className="section-description"
            style={{
              color: `${theme.textDark}99`,
              fontSize: "18px",
              maxWidth: "700px",
              margin: "0 auto"
            }}
          >
            Helping you reconnect with the sounds that matter most.
          </p>
        </div>
      </motion.section>

      {/* ================= INSPIRATION ================= */}
      <motion.section
        className="about-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        style={{ 
          padding: "80px 20px",
          backgroundColor: "#ffffff"
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <motion.img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
                alt="Hearing Care"
                className="img-fluid rounded shadow"
                variants={fadeInLeft}
                style={{
                  borderRadius: "15px",
                  boxShadow: `0 10px 40px ${theme.blue}20`
                }}
              />
            </div>
            <div className="col-lg-6">
              <motion.div variants={fadeInRight}>
                <span 
                  style={{ 
                    color: theme.green,
                    fontSize: "16px",
                    fontWeight: "600",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "15px"
                  }}
                >
                  <Sparkles size={18} /> Our Inspiration
                </span>
                <h2 
                  className="section-title-sm"
                  style={{
                    color: theme.textDark,
                    fontSize: "36px",
                    fontWeight: "700",
                    marginBottom: "20px"
                  }}
                >
                  Leading Hearing Health Care
                </h2>
                <p 
                  className="about-text"
                  style={{
                    color: `${theme.textDark}99`,
                    fontSize: "16px",
                    lineHeight: "1.8",
                    marginBottom: "15px"
                  }}
                >
                  Hear Solutions, based in Namma Bangalore, delivers premier hearing health care through our centers.
                </p>
                <p 
                  className="about-text"
                  style={{
                    color: `${theme.textDark}99`,
                    fontSize: "16px",
                    lineHeight: "1.8",
                    marginBottom: "25px"
                  }}
                >
                  Our top-rated professionals offer expert advice on hearing loss diagnosis, the latest hearing aid technology, and comprehensive aftercare services.
                </p>
                <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <CheckCircle size={20} style={{ color: theme.green }} />
                    <span style={{ color: theme.textDark, fontSize: "15px" }}>Expert Audiologists</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <CheckCircle size={20} style={{ color: theme.green }} />
                    <span style={{ color: theme.textDark, fontSize: "15px" }}>Latest Technology</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <CheckCircle size={20} style={{ color: theme.green }} />
                    <span style={{ color: theme.textDark, fontSize: "15px" }}>Comprehensive Care</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================= WHAT DO WE OFFER (Service Cards) ================= */}
      <motion.section
        className="services-cards-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        style={{ 
          padding: "80px 20px",
          backgroundColor: theme.lightBg
        }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <motion.span 
              className="section-subtitle" 
              variants={fadeInUp}
              style={{ 
                color: theme.blue,
                fontSize: "16px",
                fontWeight: "600",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "15px"
              }}
            >
              <Activity size={18} /> Our Services
            </motion.span>
            <motion.h2 
              className="section-title" 
              variants={fadeInUp}
              style={{
                color: theme.textDark,
                fontSize: "42px",
                fontWeight: "700",
                marginBottom: "15px"
              }}
            >
              WHAT DO WE OFFER
            </motion.h2>
          </div>

          <div className="row">
            {[
              {
                title: "HEARING TESTS",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
                description: "At HEAR SOLUTIONS, we deliver comprehensive and precise hearing assessments, encompassing a full spectrum of tests from basic evaluations to advanced diagnostics.",
                color: theme.blue
              },
              {
                title: "HEARING AIDS",
                image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop",
                description: "At HEAR SOLUTIONS, we offer a wide range of hearing aids from the world's leading manufacturers, ensuring you find the perfect fit for your needs.",
                color: theme.blue
              },
              {
                title: "HEARING AID REPROGRAMMING",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
                description: "At HEAR SOLUTIONS, our top Audiologists expertly reprogram and fine-tune hearing aids, ensuring an optimal listening experience tailored to each user.",
                color: theme.green
              },
              {
                title: "SERVICE & REPAIR",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
                description: "At HEAR SOLUTIONS, we send hearing aids needing service or repair to our partnered authorised labs. We ensure a smooth process by providing repair estimates first.",
                color: theme.blue
              }
            ].map((service, index) => (
              <motion.div 
                className="col-lg-3 col-md-6 mb-4" 
                key={index}
                variants={scaleIn}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div 
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: `0 5px 20px ${theme.blue}15`,
                    border: service.title === "HEARING AID REPROGRAMMING" 
                      ? `3px solid ${theme.green}` 
                      : `1px solid ${theme.blue}20`,
                    height: "100%",
                    transition: "all 0.3s ease"
                  }}
                >
                  {/* Image */}
                  <div style={{ position: "relative", overflow: "hidden", height: "200px" }}>
                    <img 
                      src={service.image}
                      alt={service.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s ease"
                      }}
                      onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
                      onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                    />
                  </div>

                  {/* Content */}
                  <div style={{ padding: "25px" }}>
                    <h4 
                      style={{
                        color: service.color,
                        fontSize: "16px",
                        fontWeight: "700",
                        letterSpacing: "0.5px",
                        marginBottom: "15px",
                        textAlign: "center"
                      }}
                    >
                      {service.title}
                    </h4>
                    <p 
                      style={{
                        color: `${theme.textDark}99`,
                        fontSize: "14px",
                        lineHeight: "1.7",
                        textAlign: "center",
                        marginBottom: "0"
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= WHY CHOOSE US ================= */}
      <motion.section
        className="why-choose-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        style={{ 
          padding: "80px 20px",
          backgroundColor: "#ffffff"
        }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <span 
              style={{ 
                color: theme.red,
                fontSize: "16px",
                fontWeight: "600",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "15px"
              }}
            >
              <Award size={18} /> Why Choose Us
            </span>
            <h2 
              style={{
                color: theme.textDark,
                fontSize: "42px",
                fontWeight: "700",
                marginBottom: "20px"
              }}
            >
              Your Trusted Hearing Partner
            </h2>
          </div>

          <div className="row">
            {[
              {
                icon: <Users size={40} />,
                title: "Expert Team",
                description: "Certified audiologists with years of experience",
                color: theme.blue
              },
              {
                icon: <Shield size={40} />,
                title: "Quality Assurance",
                description: "Premium hearing aids from world-leading brands",
                color: theme.green
              },
              {
                icon: <Clock size={40} />,
                title: "Lifetime Support",
                description: "Ongoing care and maintenance services",
                color: theme.red
              },
              {
                icon: <Target size={40} />,
                title: "Personalized Care",
                description: "Customized solutions for your unique needs",
                color: theme.blue
              }
            ].map((item, index) => (
              <motion.div 
                className="col-lg-3 col-md-6 mb-4" 
                key={index}
                variants={scaleIn}
              >
                <div 
                  style={{
                    textAlign: "center",
                    padding: "30px 20px",
                    backgroundColor: theme.lightBg,
                    borderRadius: "12px",
                    transition: "all 0.3s ease"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#ffffff";
                    e.currentTarget.style.boxShadow = `0 10px 30px ${item.color}20`;
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = theme.lightBg;
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div 
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: `${item.color}15`,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                      color: item.color
                    }}
                  >
                    {item.icon}
                  </div>
                  <h4 
                    style={{
                      color: theme.textDark,
                      fontSize: "20px",
                      fontWeight: "600",
                      marginBottom: "12px"
                    }}
                  >
                    {item.title}
                  </h4>
                  <p 
                    style={{
                      color: `${theme.textDark}99`,
                      fontSize: "15px",
                      lineHeight: "1.6",
                      marginBottom: "0"
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= STATS BAR ================= */}
      <motion.section
        className="stats-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        style={{ 
          padding: "60px 20px",
          background: `linear-gradient(135deg, ${theme.blue}, ${theme.blue}dd)`
        }}
      >
        <div className="container">
          <div className="row text-center">
            <motion.div className="col-lg-3 col-md-6 mb-4 mb-lg-0" variants={scaleIn}>
              <div>
                <h3 style={{ color: "#ffffff", fontSize: "48px", fontWeight: "700", marginBottom: "10px" }}>
                  10+
                </h3>
                <p style={{ color: "#ffffffcc", fontSize: "16px", marginBottom: "0" }}>
                  Years Experience
                </p>
              </div>
            </motion.div>
            <motion.div className="col-lg-3 col-md-6 mb-4 mb-lg-0" variants={scaleIn}>
              <div>
                <h3 style={{ color: "#ffffff", fontSize: "48px", fontWeight: "700", marginBottom: "10px" }}>
                  5000+
                </h3>
                <p style={{ color: "#ffffffcc", fontSize: "16px", marginBottom: "0" }}>
                  Happy Clients
                </p>
              </div>
            </motion.div>
            <motion.div className="col-lg-3 col-md-6 mb-4 mb-lg-0" variants={scaleIn}>
              <div>
                <h3 style={{ color: "#ffffff", fontSize: "48px", fontWeight: "700", marginBottom: "10px" }}>
                  15+
                </h3>
                <p style={{ color: "#ffffffcc", fontSize: "16px", marginBottom: "0" }}>
                  Expert Audiologists
                </p>
              </div>
            </motion.div>
            <motion.div className="col-lg-3 col-md-6" variants={scaleIn}>
              <div>
                <h3 style={{ color: "#ffffff", fontSize: "48px", fontWeight: "700", marginBottom: "10px" }}>
                  98%
                </h3>
                <p style={{ color: "#ffffffcc", fontSize: "16px", marginBottom: "0" }}>
                  Success Rate
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= CTA SECTION ================= */}
      <motion.section
        className="cta-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        style={{ 
          padding: "80px 20px",
          backgroundColor: theme.lightBg
        }}
      >
        <div className="container">
          <div 
            style={{
              background: `linear-gradient(135deg, ${theme.green}, ${theme.green}dd)`,
              borderRadius: "20px",
              padding: "60px 40px",
              textAlign: "center"
            }}
          >
            <h2 
              style={{
                color: "#ffffff",
                fontSize: "38px",
                fontWeight: "700",
                marginBottom: "20px"
              }}
            >
              Ready to Hear Better?
            </h2>
            <p 
              style={{
                color: "#ffffffcc",
                fontSize: "18px",
                marginBottom: "30px",
                maxWidth: "600px",
                margin: "0 auto 30px"
              }}
            >
              Schedule your free hearing consultation today and take the first step towards better hearing.
            </p>
            <button
              style={{
                backgroundColor: "#ffffff",
                color: theme.green,
                border: "none",
                borderRadius: "25px",
                padding: "15px 40px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px"
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = theme.blue;
                e.target.style.color = "#ffffff";
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#ffffff";
                e.target.style.color = theme.green;
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              Book Free Consultation <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </motion.section>

    </div>
  );
}

export default Aboutus;