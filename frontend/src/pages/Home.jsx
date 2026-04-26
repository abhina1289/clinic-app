import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  Heart,
  Award,
  Clock,
  Phone,
  Mail,
  User,
  Shield,
  Users,
  CheckCircle,
  Star,
  Activity,
  Ear,
  Stethoscope,
  Settings,
  RefreshCw,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import BookingForm from "../components/BookingForm";

import earaid1 from "../assets/brands/earaid1.jpg";
import earaid2 from "../assets/brands/earaid2.jpg";
import earaid4 from "../assets/brands/earaid4.jpg";

// import unitron from "../assets/brands/unitron.png";
// import resound from "../assets/brands/resound.png";
// import oticon from "../assets/brands/oticon.png";
// import phonak from "../assets/brands/phonak.png";
// import widex from "../assets/brands/widex.png";
// import starkey from "../assets/brands/starkey.png";
// import signia from "../assets/brands/signia.png";
import pic1 from "../assets/brands/pic1.png";
import pic2 from "../assets/brands/pic2.png";
import pic3 from "../assets/brands/pic3.png";
import pic4 from "../assets/brands/pic4.png";
import pic5 from "../assets/brands/pic5.png";
import pic6 from "../assets/brands/pic6.png";
import premiumlanding from "../assets/brands/premiumlanding.png";
import comprehensivelanding from "../assets/brands/comprehensivelanding.png";
import expertlanding from "../assets/brands/expertlanding.png";
import about from "../assets/brands/about.png";
import itc from "../assets/brands/itc.jpg";

const brandLogos = [pic1, pic2, pic3, pic4, pic5, pic6];

function Home() {
  const theme = {
    red: "#c92424",
    blue: "#4484c4",
    green: "#3a9f43",
    lightBg: "#f9fafb",
    textDark: "#222",
  };

  // Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselSlides = [
    {
      image: comprehensivelanding,

      title: "Comprehensive Hearing Tests",
      subtitle: "Advanced diagnostic assessments with certified audiologists",
    },
    {
      image: premiumlanding,
      title: "Premium Hearing Aid Solutions",
      subtitle: "Latest technology from world-leading manufacturers",
    },
    {
      image: expertlanding,
      title: "Expert Audiology Care",
      subtitle: "Personalized consultation and ongoing support",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length,
    );
  };

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Appointment booked successfully!");
  };

  // Services Data
  const services = [
    {
      icon: Stethoscope,
      title: "Audiology Consultation",
      description: "One-on-one guidance from experienced audiologists",
      color: theme.green,
    },
    {
      icon: Activity,
      title: "Comprehensive Hearing Tests",
      description:
        "Advanced diagnostic assessments to identify your hearing needs",
      color: theme.blue,
    },
    {
      icon: Ear,
      title: "Premium Hearing Aids",
      description: "Latest digital hearing aids from world-leading brands",
      color: theme.green,
    },
    {
      icon: RefreshCw,
      title: "Hearing Aid Reprogramming",
      description: "Expert fine-tuning for optimal hearing performance",
      color: theme.red,
    },
    {
      icon: Settings,
      title: "Service & Repair",
      description: "Professional maintenance with authorized lab support",
      color: theme.blue,
    },
  ];

  // Hearing Aid Products
  const hearingAidProducts = [
    {
      title: "Behind the Ear (BTE)",
      description:
        "Popular hearing aids sit perfectly behind your ear, connected to a custom ear mold for ultimate comfort.",
      image: earaid1,
    },
    {
      title: "Receiver in the Canal (RIC)",
      description:
        "Advanced hearing aids that sit comfortably behind the ear with a thin wire for superior sound quality.",
      image: earaid2,
    },
    {
      title: "Invisible Custom Hearing Aids (IIC & CIC)",
      description:
        "Custom-made to fit completely in the ear canal, offering comfort and near invisibility in everyday use.",
      image:
        "https://cdn.signia.net/-/media/signia/global/images/products/signia-ix/insio-ix/insio-ix_iic_mocha_pair_side_1000x1000.jpg?rev=a8fe469c7665485eb53523b23b49b970&hash=39691E768403A479B9EF7ADB1F513480",
    },
    {
      title: "In the Canal (ITC)",
      description:
        "Custom-designed to fit your ear's unique shape, more visible than IIC & CIC, allowing greater power and advanced features.",
      image: itc,
    },
    {
      title: "Rechargeable Hearing Aids",
      description:
        "Charge your hearing aid like you charge your phone - convenient and hassle-free for uninterrupted performance.",
      image: earaid4,
    },
    {
      title: "Bluetooth Hearing Aids",
      description:
        "Connect wirelessly to your smartphone for calls, music, and media streaming with crystal-clear sound.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2021/10/PT/FL/ID/125578747/slim-ric-hearing-aid-1000x1000.jpg",
    },
  ];

  // const brandLogos = [
  //   "../assets/brands/pic1.png",
  //   "../assets/brands/pic2.png",
  //   "../assets/brands/pic3.png",
  //   "../assets/brands/pic4.png",
  //   "../assets/brands/pic5.png",
  //   "../assets/brands/pic6.png",
  // ];

  return (
    <div className="min-h-screen">
    {/* Hero Carousel Section */}
{/* Hero Carousel Section */}
<section className="relative h-[500px] lg:h-[600px] overflow-hidden bg-blend-exclusion">
  {carouselSlides.map((slide, index) => (
    <div
      key={index}
      className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
        index === currentSlide ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={slide.image}
        alt={slide.title}
        className="w-[950%] h-[100%] mx-auto object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              {slide.title}
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              {slide.subtitle}
            </p>
            <Link to="/book-appointment">
              <button className="px-8 py-4 rounded-lg font-semibold text-white bg-blue-600 hover:scale-105 transition-all duration-300">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ))}

  {/* Indicators */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
    {carouselSlides.map((_, index) => (
      <div
        key={index}
        className={`h-2 rounded-full transition-all ${
          index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"
        }`}
      />
    ))}
  </div>
</section>
      <div
        className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2"
        style={{ borderColor: `${theme.blue}20` }}
      >
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div
              className="bg-white rounded-3xl shadow-2xl border-2 p-6 md:p-10 max-w-4xl mx-auto"
              style={{ borderColor: `${theme.blue}20` }}
            >
              <BookingForm />
            </div>
          </div>
        </section>

        {/* Brand Logos Section */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4">
            {/* Section Title */}
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
              Trusted Hearing Aid Brands
            </h2>

            {/* Carousel */}
            <div className="relative overflow-hidden w-full">
              <div
                className="flex gap-14 items-center"
                style={{
                  animation: "scroll 30s linear infinite",
                  width: "max-content",
                }}
              >
                {[...brandLogos, ...brandLogos].map((logo, index) => (
                  <div
                    key={index}
                    className="min-w-[240px] flex items-center justify-center"
                  >
                    <img
                      src={logo}
                      alt="Hearing Aid Brand"
                      className={`w-auto object-contain
    transition-transform duration-300
    hover:scale-105
    ${logo.includes("pic2") ? "h-34 md:h-38" : "h-18 md:h-20"}
  `}
                    />
                  </div>
                ))}
              </div>

              {/* Inline animation */}
              <style>
                {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}
              </style>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <img
                    src={about}
                    alt="Naavika Hearing Center"
                    className="rounded-2xl shadow-xl w-full"
                  />
                  <div
                    className="absolute bottom-6 left-6 rounded-xl p-4 flex items-center gap-3"
                    style={{
                      backgroundColor: theme.green,
                      color: "#ffffff",
                    }}
                  >
                    <Shield size={24} />
                    <span className="font-semibold">Certified Healthcare</span>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="space-y-6">
                  <span
                    className="inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: theme.red }}
                  >
                    <Heart size={18} /> About Us
                  </span>
                  <h2
                    className="text-3xl lg:text-4xl font-bold text-center"
                    style={{ color: theme.textDark }}
                  >
                    About Naavika Hearing
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed text-justify">
                    Naavika Hearing, founded by <b>Abhishek Gowda</b>, alumnus
                    of the prestigious
                    <b>All India Institute Of Speech and Hearing (AIISH),</b> is
                    built on one belief Hearing care should be personal and
                    compassionate.
                    <br />
                    We don't just fit hearing aids. We listen, with advanced
                    diagnostics and clinical precision, we restore confidence,
                    connection, and the joy of everyday sounds.
                    <br />
                    At Naavika Hearing, excellence is our standard and every
                    patient is family.
                  </p>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <Activity
                        className="w-6 h-6 flex-shrink-0 mt-1"
                        style={{ color: theme.blue }}
                      />
                      <div>
                        <h5
                          className="font-bold mb-1"
                          style={{ color: theme.textDark }}
                        >
                          Advanced Technology
                        </h5>
                        <p className="text-gray-600">
                          Latest hearing aids and diagnostic tools
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Shield
                        className="w-6 h-6 flex-shrink-0 mt-1"
                        style={{ color: theme.green }}
                      />
                      <div>
                        <h5
                          className="font-bold mb-1"
                          style={{ color: theme.textDark }}
                        >
                          Patient Care
                        </h5>
                        <p className="text-gray-600">
                          Highest standards of safety and personalized service
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Clock
                        className="w-6 h-6 flex-shrink-0 mt-1"
                        style={{ color: theme.red }}
                      />
                      <div>
                        <h5
                          className="font-bold mb-1"
                          style={{ color: theme.textDark }}
                        >
                          Lifetime Support
                        </h5>
                        <p className="text-gray-600">
                          Ongoing care and maintenance for your hearing aids
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold mb-4"
                style={{ color: theme.green }}
              >
                <Activity size={18} /> Our Services
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ color: theme.textDark }}
              >
                Specialized Hearing Care Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive solutions tailored to your unique hearing needs
              </p>
            </div>

            {/* Services Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon size={28} style={{ color: service.color }} />
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: theme.textDark }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link to="/service">
                    <button
                      className="text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                      style={{ color: service.color }}
                    >
                      Learn More <ArrowRight size={16} />
                    </button>
                  </Link>
                </div>
              ))}
            </div>

            {/* Hearing Aid Products - Inside Services Section */}
            <div className="mt-16">
              <div className="text-center mb-12">
                <h2
                  className="text-3xl lg:text-4xl font-bold mb-4"
                  style={{ color: theme.textDark }}
                >
                  Discover and Experience Our Latest Hearing Aids
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Explore different types of hearing aids designed for comfort,
                  performance, and a natural hearing experience
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {hearingAidProducts.map((product, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-md  overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    {/* Image Area - Full clean fit */}
                    <div className="flex items-center justify-center bg-white h-56 p-6">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-full max-w-full scale-150 object-contain"
                      />
                    </div>

                    {/* Divider */}
                    <div className="border-none border-gray-100" />

                    {/* Text Content */}
                    <div className="p-6 text-center space-y-2">
                      <h3
                        className="text-xl font-bold"
                        style={{ color: theme.textDark }}
                      >
                        {product.title}
                      </h3>
                      {/* <p className="text-gray-500 text-sm leading-relaxed">
            {product.description}
          </p> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* View All Services Button */}
            <div className="text-center mt-12">
              <Link to="/service">
                <button
                  className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
                  style={{ backgroundColor: theme.blue }}
                >
                  View All Services <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-teal-50">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold mb-4"
                style={{ color: theme.blue }}
              >
                <Star size={18} /> Patient Reviews
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ color: theme.textDark }}
              >
                What Our Patients Say
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Real experiences from people who trust Naavika for their hearing
                care
              </p>
            </div>

            {/* Google Reviews Style Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Review 1 */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://st2.depositphotos.com/1007566/11574/v/450/depositphotos_115748268-stock-illustration-young-executive-woman-profile-icon.jpg"
                    alt="Shruthi shivdas"
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                  />
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">
                      Shruthi shivdas
                    </div>
                    <div className="text-xs text-gray-400">
                      1 review • January 2026
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  " Totally happy with the services my dad received . Abhishek
                  is absolutely professional since my dad has parkinsons he did
                  home visists and made sure dad was comfortable throughout my
                  dad's hearing is at its best now Super impressive"
                </p>
                <div
                  className="text-xs font-medium mt-3 inline-block px-2 py-1 rounded-full"
                  style={{ backgroundColor: "#EFF6FF", color: theme.blue }}
                >
                  Hearing Aid Fitting
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="Ramaswami Ganesan"
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                  />
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">
                      Ramaswami Ganesan
                    </div>
                    <div className="text-xs text-gray-400">
                      2 reviews • 2 years ago
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  "Since six years , no audiologist could set right my hearing
                  aid...STARKEY model. Cheif doctor in the clinic Naavika
                  Hearing Clinic, JP Nagar, Banglore, had resolved my hearing
                  problems using the above hearing aid. Doctor Sab!! i hear much
                  much better now. I owe a lot to you ."
                </p>
                <div
                  className="text-xs font-medium mt-3 inline-block px-2 py-1 rounded-full"
                  style={{ backgroundColor: "#F0FDF4", color: theme.green }}
                >
                  Reprogramming
                </div>
              </div>

              {/* Review 3 */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/029/271/062/non_2x/avatar-profile-icon-in-flat-style-male-user-profile-illustration-on-isolated-background-man-profile-sign-business-concept-vector.jpg"
                    alt="Yogesh H.N"
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                  />
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">
                      Yogesh H.N
                    </div>
                    <div className="text-xs text-gray-400">
                      1 review • a year ago
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  "I've been wearing hearing aids for years , but i've never had
                  this level of care before. The clinc doesn't just fit you and
                  send you off- they offer continous check-ups and adjustments,
                  ensuring my devices are always performing at their best."
                </p>
                <div
                  className="text-xs font-medium mt-3 inline-block px-2 py-1 rounded-full"
                  style={{ backgroundColor: "#EFF6FF", color: theme.blue }}
                >
                  Service and Repair
                </div>
              </div>
            </div>

            {/* View All Button */}
            <div className="text-center mt-10">
              <Link to="/review">
                <button
                  className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 shadow-lg"
                  style={{ backgroundColor: theme.green }}
                >
                  View All Reviews <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-16"
          style={{
            background: `linear-gradient(135deg, ${theme.red}, ${theme.red}dd)`,
          }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-white/90 text-lg">
                  Book your appointment today and experience world-class hearing
                  care services
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
                <a href="tel:+1234567890">
                  <button
                    className="px-6 py-3 rounded-lg font-semibold bg-white transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
                    style={{ color: theme.red }}
                  >
                    <Phone size={20} /> Call Us Now
                  </button>
                </a>
                <Link to="/book-appointment">
                  <button
                    className="px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
                    style={{ backgroundColor: theme.blue }}
                  >
                    <Calendar size={20} /> Book Appointment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Floating Action Buttons */}
        <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-5">
          {/* Call */}
          <a
            href="tel:+918123379944"
            className="group relative flex items-center justify-center 
               w-14 h-14 rounded-full 
               bg-red-600 text-white shadow-xl
               hover:scale-110 hover:shadow-2xl
               hover:ring-4 hover:ring-red-300
               transition-all duration-300
               animate-pulse"
            title="Call Us"
          >
            <Phone size={24} />

            {/* Tooltip */}
            <span
              className="absolute right-16 opacity-0 group-hover:opacity-100 
                     bg-red-600 text-white text-sm px-3 py-1 rounded-md 
                     whitespace-nowrap transition"
            >
              Call Us
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918123379944"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center 
               w-14 h-14 rounded-full 
               bg-green-500 text-white shadow-xl
               hover:scale-110 hover:shadow-2xl
               hover:ring-4 hover:ring-green-300
               transition-all duration-300
               animate-pulse"
            title="WhatsApp"
          >
            <FaWhatsapp size={26} />

            {/* Tooltip */}
            <span
              className="absolute right-16 opacity-0 group-hover:opacity-100 
                     bg-green-500 text-white text-sm px-3 py-1 rounded-md 
                     whitespace-nowrap transition"
            >
              WhatsApp
            </span>
          </a>

          {/* Appointment */}
          <Link
            to="/book-appointment"
            className="group relative flex items-center justify-center 
               w-14 h-14 rounded-full 
               bg-blue-600 text-white shadow-xl
               hover:scale-110 hover:shadow-2xl
               hover:ring-4 hover:ring-blue-300
               transition-all duration-300"
            title="Book Appointment"
          >
            <Calendar size={24} />

            {/* Tooltip */}
            <span
              className="absolute right-16 opacity-0 group-hover:opacity-100 
                     bg-blue-600 text-white text-sm px-3 py-1 rounded-md 
                     whitespace-nowrap transition"
            >
              Book Appointment
            </span>
          </Link>
        </div>
        {/* Floating Action Buttons - Mobile Only */}
        <div
          className="fixed right-4 top-1/2 -translate-y-1/2 
             z-50 flex flex-col gap-4 
             md:hidden"
        >
          {/* Call */}
          <a
            href="tel:+918123379944"
            className="group relative flex items-center justify-center 
               w-12 h-12 rounded-full 
               bg-red-600 text-white shadow-xl
               hover:scale-110 hover:shadow-2xl
               hover:ring-4 hover:ring-red-300
               transition-all duration-300
               animate-pulse"
            title="Call Us"
          >
            <Phone size={22} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918123379944"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center 
               w-12 h-12 rounded-full 
               bg-green-500 text-white shadow-xl
               hover:scale-110 hover:shadow-2xl
               hover:ring-4 hover:ring-green-300
               transition-all duration-300
               animate-pulse"
            title="WhatsApp"
          >
            <FaWhatsapp size={24} />
          </a>

          {/* Appointment */}
          <Link
            to="/book-appointment"
            className="group relative flex items-center justify-center 
               w-12 h-12 rounded-full 
               bg-blue-600 text-white shadow-xl
               hover:scale-110 hover:shadow-2xl
               hover:ring-4 hover:ring-blue-300
               transition-all duration-300
               animate-pulse"
            title="Book Appointment"
          >
            <Calendar size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
