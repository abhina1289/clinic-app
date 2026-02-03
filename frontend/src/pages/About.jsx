import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Award,
  Shield,
  Users,
  Activity,
  Star,
  ArrowRight,
  Stethoscope,
  Clock,
  CheckCircle,
  Target,
  Sparkles
} from "lucide-react";

function About() {
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
    <div className="min-h-screen bg-gray-50">

      {/* ================= HERO ================= */}
      <motion.section
        className="text-center py-20 px-5"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        style={{
          background: `linear-gradient(135deg, ${theme.blue}15, ${theme.lightBg})`,
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <span 
            className="inline-flex items-center gap-2 text-base font-semibold mb-4"
            style={{ color: theme.red }}
          >
            <Heart size={18} /> About Us
          </span>
          <h1 
            className="text-5xl font-bold mb-5"
            style={{ color: theme.textDark }}
          >
            Naavika Hearing Health Clinic
          </h1>
          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Helping you reconnect with the sounds that matter most.
          </p>
        </div>
      </motion.section>

      {/* ================= INSPIRATION ================= */}
      <motion.section
        className="py-20 px-5 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2">
              <motion.img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
                alt="Hearing Care"
                className="w-full rounded-2xl shadow-xl"
                variants={fadeInLeft}
                style={{
                  boxShadow: `0 10px 40px ${theme.blue}20`
                }}
              />
            </div>
            <div className="w-full lg:w-1/2">
              <motion.div variants={fadeInRight} className="space-y-6">
                <span 
                  className="inline-flex items-center gap-2 text-base font-semibold"
                  style={{ color: theme.green }}
                >
                  <Sparkles size={18} /> Our Inspiration
                </span>
                <h2 
                  className="text-4xl font-bold"
                  style={{ color: theme.textDark }}
                >
                  Leading Hearing Health Care
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Hear Solutions, based in Namma Bangalore, delivers premier hearing health care through our centers.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our top-rated professionals offer expert advice on hearing loss diagnosis, the latest hearing aid technology, and comprehensive aftercare services.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={20} style={{ color: theme.green }} />
                    <span className="text-gray-800 text-sm">Expert Audiologists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={20} style={{ color: theme.green }} />
                    <span className="text-gray-800 text-sm">Latest Technology</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={20} style={{ color: theme.green }} />
                    <span className="text-gray-800 text-sm">Comprehensive Care</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================= WHAT DO WE OFFER (Service Cards) ================= */}
      <motion.section
        className="py-20 px-5 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <motion.span 
              className="inline-flex items-center gap-2 text-base font-semibold mb-4"
              variants={fadeInUp}
              style={{ color: theme.blue }}
            >
              <Activity size={18} /> Our Services
            </motion.span>
            <motion.h2 
              className="text-4xl font-bold"
              variants={fadeInUp}
              style={{ color: theme.textDark }}
            >
              WHAT DO WE OFFER
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "HEARING TESTS",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
                description: "At HEAR SOLUTIONS, we deliver comprehensive and precise hearing assessments, encompassing a full spectrum of tests from basic evaluations to advanced diagnostics.",
                color: theme.blue,
                special: false
              },
              {
                title: "HEARING AIDS",
                image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop",
                description: "At HEAR SOLUTIONS, we offer a wide range of hearing aids from the world's leading manufacturers, ensuring you find the perfect fit for your needs.",
                color: theme.blue,
                special: false
              },
              {
                title: "HEARING AID REPROGRAMMING",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
                description: "At HEAR SOLUTIONS, our top Audiologists expertly reprogram and fine-tune hearing aids, ensuring an optimal listening experience tailored to each user.",
                color: theme.green,
                special: true
              },
              {
                title: "SERVICE & REPAIR",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
                description: "At HEAR SOLUTIONS, we send hearing aids needing service or repair to our partnered authorised labs. We ensure a smooth process by providing repair estimates first.",
                color: theme.blue,
                special: false
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="h-full"
              >
                <div 
                  className={`bg-white rounded-xl overflow-hidden h-full transition-all duration-300 ${
                    service.special 
                      ? 'border-3' 
                      : 'border border-blue-100'
                  }`}
                  style={{
                    boxShadow: `0 5px 20px ${theme.blue}15`,
                    borderColor: service.special ? theme.green : undefined,
                    borderWidth: service.special ? '3px' : undefined,
                  }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 
                      className="text-base font-bold tracking-wider mb-4 text-center"
                      style={{ color: service.color }}
                    >
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed text-center">
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
        className="py-20 px-5 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span 
              className="inline-flex items-center gap-2 text-base font-semibold mb-4"
              style={{ color: theme.red }}
            >
              <Award size={18} /> Why Choose Us
            </span>
            <h2 
              className="text-4xl font-bold"
              style={{ color: theme.textDark }}
            >
              Your Trusted Hearing Partner
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                key={index}
                variants={scaleIn}
              >
                <div 
                  className="text-center p-8 bg-gray-50 rounded-xl transition-all duration-300 hover:-translate-y-1"
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#ffffff";
                    e.currentTarget.style.boxShadow = `0 10px 30px ${item.color}20`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = theme.lightBg;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{
                      backgroundColor: `${item.color}15`,
                      color: item.color
                    }}
                  >
                    {item.icon}
                  </div>
                  <h4 
                    className="text-xl font-semibold mb-3"
                    style={{ color: theme.textDark }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
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
        className="py-16 px-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        style={{ 
          background: `linear-gradient(135deg, ${theme.blue}, ${theme.blue}dd)`
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div variants={scaleIn}>
              <h3 className="text-5xl font-bold text-white mb-2">10+</h3>
              <p className="text-white/80">Years Experience</p>
            </motion.div>
            <motion.div variants={scaleIn}>
              <h3 className="text-5xl font-bold text-white mb-2">5000+</h3>
              <p className="text-white/80">Happy Clients</p>
            </motion.div>
            <motion.div variants={scaleIn}>
              <h3 className="text-5xl font-bold text-white mb-2">15+</h3>
              <p className="text-white/80">Expert Audiologists</p>
            </motion.div>
            <motion.div variants={scaleIn}>
              <h3 className="text-5xl font-bold text-white mb-2">98%</h3>
              <p className="text-white/80">Success Rate</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= CTA SECTION ================= */}
      <motion.section
        className="py-20 px-5 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto max-w-4xl">
          <div 
            className="rounded-3xl p-16 text-center"
            style={{
              background: `linear-gradient(135deg, ${theme.green}, ${theme.green}dd)`,
            }}
          >
            <h2 className="text-4xl font-bold text-white mb-5">
              Ready to Hear Better?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Schedule your free hearing consultation today and take the first step towards better hearing.
            </p>
            <button
              className="inline-flex items-center gap-3 bg-white rounded-full px-10 py-4 font-semibold transition-all duration-300"
              style={{ color: theme.green }}
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

export default About;