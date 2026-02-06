import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NaavikaContact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Naavika Hearing Health Clinic", "Medical College Road", "Thiruvananthapuram, Kerala 695011"],
      color: "teal"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109"],
      color: "blue"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@naavika.com", "support@naavika.com"],
      color: "teal"
    },
    // {
    //   icon: Clock,
    //   title: "Working Hours",
    //   details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
    //   color: "blue"
    // }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 
            className={`text-5xl font-bold mb-4 transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
          >
            NAAVIKA
          </h1>
          <p 
            className={`text-2xl mb-2 transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
          >
            Hearing Health Clinic
          </p>
          <p 
            className={`text-lg text-teal-100 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
          >
            Get in Touch With Our Hearing Care Experts
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-6xl mx-auto px-4 -mt-12 mb-16">
        <div 
          className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="relative h-96 md:h-[500px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.6589384245745!2d76.94481107501433!3d8.524647691544442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb1f4c5b6c5%3A0x5c4b7d5a8c8a8c8a!2sMedical%20College%2C%20Thiruvananthapuram!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Naavika Hearing Health Clinic Location"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            const iconColorClass = info.color === 'teal' ? 'text-teal-600' : 'text-blue-600';
            const bgColorClass = info.color === 'teal' 
              ? 'bg-gradient-to-br from-teal-100 to-teal-200' 
              : 'bg-gradient-to-br from-blue-100 to-blue-200';
            
            return (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100 + 600}ms` }}
              >
                <div className={`w-16 h-16 rounded-full ${bgColorClass} flex items-center justify-center mb-4 mx-auto`}>
                  <IconComponent className={`w-8 h-8 ${iconColorClass}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-4">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm text-center">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Form Section */}
      {/* <div className="max-w-4xl mx-auto px-4 pb-16">
        <div 
          className={`bg-white rounded-2xl shadow-2xl p-8 md:p-12 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Send Us a Message
            </h2>
            <p className="text-gray-600">
              Have questions? We'd love to hear from you. Fill out the form below.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-12 animate-fade-in">
              <CheckCircle className="w-20 h-20 text-teal-600 mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600">
                Your message has been sent successfully. We'll get back to you soon!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-all duration-300"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:from-teal-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div> */}

      {/* Additional Info Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            Schedule Your Free Hearing Assessment
          </h3>
          <p className="text-lg mb-6 text-teal-100">
            Early detection is key to better hearing health. Book your complimentary consultation today!
          </p>
         <Link to={"/book-appointment"}><button className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Book Appointment
          </button></Link> 
        </div>
      </div>

      {/* Footer */}
      {/* <div className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-2">
            © 2026 Naavika Hearing Health Clinic. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Your hearing health is our priority
          </p>
        </div>
      </div> */}
    </div>
  );
}