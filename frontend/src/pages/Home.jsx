import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

// import unitron from "../assets/brands/unitron.png";
// import resound from "../assets/brands/resound.png";
// import oticon from "../assets/brands/oticon.png";
// import phonak from "../assets/brands/phonak.png";
// import widex from "../assets/brands/widex.png";
// import starkey from "../assets/brands/starkey.png";
// import signia from "../assets/brands/signia.png";

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
      image:
        "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&h=600&fit=crop",
      title: "Comprehensive Hearing Tests",
      subtitle: "Advanced diagnostic assessments with certified audiologists",
    },
    {
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=600&fit=crop",
      title: "Premium Hearing Aid Solutions",
      subtitle: "Latest technology from world-leading manufacturers",
    },
    {
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop",
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
    {
      icon: Stethoscope,
      title: "Audiology Consultation",
      description: "One-on-one guidance from experienced audiologists",
      color: theme.green,
    },
  ];

  // Hearing Aid Products
  const hearingAidProducts = [
    {
      title: "Behind the Ear (BTE)",
      description:
        "Popular hearing aids sit perfectly behind your ear, connected to a custom ear mold for ultimate comfort.",
      image:
        "https://www.hearingwellnesscentre.com/wp-content/uploads/2024/05/Untitled-design-2024-05-22T004412.431.png",
    },
    {
      title: "Receiver in the Canal (RIC)",
      description:
        "Advanced hearing aids that sit comfortably behind the ear with a thin wire for superior sound quality.",
      image:
        "https://www.hearingwellnesscentre.com/wp-content/uploads/2024/08/Untitled-332-x-216-px-1.png",
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
      image:
        "https://tse2.mm.bing.net/th/id/OIP.pZu7LapMFvgp1PegPHoqtAAAAA?pid=Api&P=0&h=180",
    },
    {
      title: "Rechargeable Hearing Aids",
      description:
        "Charge your hearing aid like you charge your phone - convenient and hassle-free for uninterrupted performance.",
      image:
        "https://www.hearingaidknow.com/assets/img/rechargeable-marvel.jpg",
    },
    {
      title: "Bluetooth Hearing Aids",
      description:
        "Connect wirelessly to your smartphone for calls, music, and media streaming with crystal-clear sound.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2021/10/PT/FL/ID/125578747/slim-ric-hearing-aid-1000x1000.jpg",
    },
  ];

  const brandLogos = [
    "/brands/pic1.png",
    "/brands/pic2.png",
    "/brands/pic3.png",
    "/brands/pic4.png",
    "/brands/pic5.png",
    "/brands/pic6.png",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section className="relative h-[500px] lg:h-[600px] overflow-hidden bg-gray-900">
        {carouselSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
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
                    <button
                      className="px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 flex items-center gap-2"
                      style={{ backgroundColor: theme.blue }}
                    >
                      Book Appointment <ArrowRight size={20} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
              <div
                className="p-6 flex items-center gap-3"
                style={{
                  background: `linear-gradient(135deg, ${theme.blue}, ${theme.blue}dd)`,
                }}
              >
                <Calendar className="text-white" size={24} />
                <h3 className="text-xl font-bold text-white">
                  Book Your Appointment
                </h3>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <div className="relative">
                    <span
                      className="absolute left-3 top-1/2 -translate-y-1/2"
                      style={{ color: theme.blue }}
                    >
                      <User size={18} />
                    </span>
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                    <span
                      className="absolute left-3 top-1/2 -translate-y-1/2"
                      style={{ color: theme.blue }}
                    >
                      <Mail size={18} />
                    </span>
                    <input
                      type="email"
                      className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                    <span
                      className="absolute left-3 top-1/2 -translate-y-1/2"
                      style={{ color: theme.blue }}
                    >
                      <Phone size={18} />
                    </span>
                    <input
                      type="tel"
                      className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                  className="w-full py-3 rounded-lg font-semibold text-white transition-colors duration-300 flex items-center justify-center gap-2"
                  style={{ backgroundColor: theme.red }}
                >
                  Book Now <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      {/* <section className="py-14 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
            Trusted Hearing Aid Brands
          </h2> */}

      {/* Slider */}
      {/* <div className="relative w-full overflow-hidden">
            <div className="flex gap-12 animate-scroll hover:[animation-play-state:paused]">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[160px] md:min-w-[200px]"
                >
                  <img
                    src={logo}
                    alt="Brand Logo"
                    className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
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
                animation: "scroll 25s linear infinite",
                width: "max-content",
              }}
            >
              {[...brandLogos, ...brandLogos].map((logo, index) => (
                <div
                  key={index}
                  className="min-w-[180px] flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt="Hearing Aid Brand"
                    className="h-16 md:h-18 w-auto object-contain
                         transition-transform duration-300
                         hover:scale-105"
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
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop"
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
                  className="text-3xl lg:text-4xl font-bold"
                  style={{ color: theme.textDark }}
                >
                  About Naavika Hearing
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We provide comprehensive hearing care with state-of-the-art
                  facilities and experienced audiologists. Our mission is to
                  deliver exceptional hearing solutions with compassion and
                  excellence, helping you reconnect with the sounds you love.
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
                        Latest hearing equipment and diagnostic tools
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
                  className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center justify-center p-6 bg-gray-50 h-60">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="p-6 text-center space-y-3">
                    <h3
                      className="text-xl font-bold"
                      style={{ color: theme.textDark }}
                    >
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {product.description}
                    </p>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Review 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/014/388/508/non_2x/avatar-portrait-of-a-young-caucasian-boy-man-in-round-blue-frame-illustration-in-cartoon-flat-style-vector.jpg"
                  alt="Happy patient"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                  "Excellent service! Dr. Priya was very patient and thorough in
                  explaining my hearing condition. The hearing aids recommended
                  have truly changed my quality of life."
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-800">
                    Rajesh Kumar
                  </div>
                  <div className="text-sm text-gray-600">
                    Thiruvananthapuram
                  </div>
                  <div
                    className="text-xs font-medium mt-1"
                    style={{ color: theme.blue }}
                  >
                    Hearing Aid Fitting
                  </div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/024/183/520/original/female-avatar-portrait-of-a-cute-brunette-woman-illustration-of-a-female-character-in-a-modern-color-style-vector.jpg"
                  alt="Satisfied customer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                  "The staff at Naavika are incredibly professional and caring.
                  They took time to understand my needs and provided the perfect
                  solution."
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-800">Meera Nair</div>
                  <div className="text-sm text-gray-600">Kollam</div>
                  <div
                    className="text-xs font-medium mt-1"
                    style={{ color: theme.green }}
                  >
                    Hearing Assessment
                  </div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden bg-gradient-to-br from-teal-100 to-green-100 flex items-center justify-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/029/271/062/non_2x/avatar-profile-icon-in-flat-style-male-user-profile-illustration-on-isolated-background-man-profile-sign-business-concept-vector.jpg"
                  alt="Happy elderly patient"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                  "I was hesitant about getting hearing aids, but the team at
                  Naavika made the entire process comfortable. Thank you for
                  giving me my confidence back!"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-800">
                    Anand Pillai
                  </div>
                  <div className="text-sm text-gray-600">Kochi</div>
                  <div
                    className="text-xs font-medium mt-1"
                    style={{ color: theme.blue }}
                  >
                    Tinnitus Management
                  </div>
                </div>
              </div>
            </div>
          </div>

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
          href="tel:+919876543210"
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
          href="https://wa.me/919876543210"
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
    </div>
  );
}

export default Home;
