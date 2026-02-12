import {
  Activity,
  Ear,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Stethoscope,
  Settings,
  RefreshCw,
} from "lucide-react";
import { Phone, Calendar } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { Link } from "react-router-dom";


function Services() {
  const theme = {
    red: "#c92424",
    blue: "#4484c4",
    green: "#3a9f43",
    purple: "#7c3aed",
    orange: "#f97316",
    teal: "#0d9488",
    textDark: "#222",
  };

  const services = [
    {
      id: 1,
      title: "Comprehensive Hearing Tests",
      icon: Activity,
      color: theme.blue,
      image:
        "https://audiologists.org/wp-content/uploads/2025/04/audiometry-test.jpg",
      description:
        "Get a complete picture of your hearing health with our advanced diagnostic assessments. Our certified audiologists use state-of-the-art equipment to identify your specific needs and create a personalized care plan.",
      features: [
        "Pure Tone Audiometry - Measures hearing sensitivity across frequencies",
        "Speech Understanding Tests - Evaluates clarity in real-world scenarios",
        "Detailed Hearing Report - Easy-to-understand results and recommendations",
        "Expert Consultation - Personalized advice from our specialists",
      ],
      duration: "30-45 minutes",
      badge: "Painless & Accurate",
    },
    {
      id: 2,
      title: "Premium Hearing Aids",
      icon: Ear,
      color: theme.green,
      image:
        "https://www.denvercoloradoearnosethroatallergysinusdoctors.com/wp-content/uploads/2022/02/Cochlear-Implant-Blog-AOO--scaled.jpg",
      description:
        "Experience life in full sound with our range of advanced hearing aids. From invisible designs to powerful digital solutions, we'll find the perfect fit for your lifestyle, comfort, and budget.",
      features: [
        "Latest Digital Technology - Crystal-clear sound with smart features",
        "Rechargeable Options - Eco-friendly and hassle-free power",
        "Multiple Styles Available - Invisible, in-ear, and behind-ear models",
        "Lifetime Support - Free adjustments, cleaning, and follow-ups",
      ],
      duration: "Custom Fitted",
      badge: "Warranty Included",
    },
    {
      id: 3,
      title: "Hearing Aid Reprogramming",
      icon: RefreshCw,
      color: theme.teal,
      image:
        "https://www.ferringhearingcentre.co.uk/wp-content/uploads/2015/10/inside-a-hearing-aid-how-a-hearing-aid-works.jpg",
      description:
        "Our expert audiologists reprogram and fine-tune your hearing aids to ensure optimal performance tailored to your changing needs and listening environments.",
      features: [
        "Frequency Adjustments - Optimize sound across different pitches",
        "Volume Optimization - Perfect balance for comfort and clarity",
        "Noise Reduction Settings - Enhanced speech understanding in noisy environments",
        "Personalized Configurations - Customized programs for different situations",
      ],
      duration: "20-30 minutes",
      badge: "Precision Tuning",
    },
    {
      id: 4,
      title: "Service & Repair",
      icon: Settings,
      color: theme.orange,
      image:
        "https://s3.amazonaws.com/media.audiologydesign.com/wp-content/uploads/sites/552/2022/06/15183025/hearing-aids-8.jpg",
      description:
        "Professional maintenance and repair services to keep your hearing aids in perfect working condition. We send hearing aids needing service or repair to our partnered authorized labs.",
      features: [
        "Deep Cleaning Service - Thorough professional cleaning",
        "Component Replacement - Genuine parts from manufacturers",
        "Quick Turnaround Time - Most repairs completed promptly",
        "Genuine Parts Only - Quality assurance with authorized components",
      ],
      duration: "Same Day Available",
      badge: "Authorized Service",
    },
    {
      id: 5,
      title: "Audiology Consultation",
      icon: Stethoscope,
      color: theme.purple,
      image:
        "https://www.audibel.com/wp-content/uploads/2023/01/testing-hearing-loss-1024x682.webp",
      description:
        "One-on-one consultation with our experienced audiologists to discuss your hearing concerns, lifestyle needs, and develop a personalized care plan just for you.",
      features: [
        "Hearing Health Assessment - Comprehensive evaluation of your hearing",
        "Lifestyle Analysis - Understanding your daily hearing challenges",
        "Treatment Planning - Customized solutions based on your needs",
        "Follow-up Care Guidance - Ongoing support and monitoring",
      ],
      duration: "45-60 minutes",
      badge: "Expert Guidance",
    },
  ];

  const hearingAidProducts = [
    {
      title: "Behind the Ear (BTE)",
      description:
        "Popular hearing aids sit perfectly behind your ear, connected to a custom ear mold or thin tubing for ultimate comfort.",
      image:
        "https://www.hearingwellnesscentre.com/wp-content/uploads/2024/05/Untitled-design-2024-05-22T004412.431.png",
    },
    {
      title: "Receiver in the Canal (RIC)",
      description:
        "The more advanced hearing aids sits comfortably behind the ear and has a electric wire instead of a tube and gives superior quality of sound",
      image:
        "https://www.hearingwellnesscentre.com/wp-content/uploads/2024/08/Untitled-332-x-216-px-1.png",
    },
    {
      title: "Invisible Custom Hearing Aids (IIC & CIC)",
      description:
        "These hearing aids are custom-made to fit completely in the ear and are very small. They offer comfort and are nearly invisible in everyday use.",
      image:
        "https://cdn.signia.net/-/media/signia/global/images/products/signia-ix/insio-ix/insio-ix_iic_mocha_pair_side_1000x1000.jpg?rev=a8fe469c7665485eb53523b23b49b970&hash=39691E768403A479B9EF7ADB1F513480",
    },
    {
      title: "In the Canal (ITC)",
      description:
        "Custom-designed to fit your ear's unique shape, this model is slightly more visible than IIC & CIC options, allowing for greater power and advanced features.",
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
        "It turns into a Bluetooth headset for clear phone calls and connects wirelessly to your smartphone for streaming music and media.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2021/10/PT/FL/ID/125578747/slim-ric-hearing-aid-1000x1000.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="py-16 lg:py-24 text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <span
            className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: `${theme.green}30`, color: theme.green }}
          >
            Professional Hearing Care Services
          </span>
          <h1
            className="text-4xl lg:text-6xl font-bold mb-6"
            style={{ color: theme.textDark }}
          >
            Hear Life Better
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg lg:text-xl leading-relaxed">
            Your journey to crystal-clear hearing starts here. We combine expert
            care with cutting-edge technology to bring back the sounds you love.
          </p>
        </div>
      </section>

      {/* Services Section - One by One Layout */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: theme.textDark }}
            >
              Our Specialized Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive hearing care solutions tailored to your unique needs
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8 lg:gap-12`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                    {/* Icon Badge */}
                    <div
                      className="absolute top-6 right-6 rounded-full p-4 shadow-lg"
                      style={{
                        backgroundColor: `${service.color}15`,
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <service.icon
                        size={32}
                        style={{ color: service.color }}
                      />
                    </div>

                    {/* Badge */}
                    <div className="absolute bottom-6 left-6">
                      <span
                        className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-white/90 backdrop-blur-sm"
                        style={{ color: service.color }}
                      >
                        {service.badge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <h3
                      className="text-3xl lg:text-4xl font-bold mb-4"
                      style={{ color: service.color }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800 text-lg">
                      What's Included:
                    </h4>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle
                          size={20}
                          style={{ color: service.color }}
                          className="mt-1 flex-shrink-0"
                        />
                        <p className="text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-2 pt-4">
                    <Clock size={20} style={{ color: service.color }} />
                    <span className="font-semibold text-gray-700">
                      Duration: {service.duration}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Link to="/book-appointment">
                      <button
                        className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
                        style={{ backgroundColor: service.color }}
                      >
                        Book This Service <ArrowRight size={18} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hearing Aid Products Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {hearingAidProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center justify-center p-6 bg-gray-50 h-56">
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
      </section>

      {/* CTA Section */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, ${theme.blue}, ${theme.green})`,
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Hear the Difference?
          </h2>
          <p className="text-white/95 text-lg lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Book your free hearing consultation today. Let's find the perfect
            solution for your hearing needs together.
          </p>
          <Link to="/book-appointment">
            <button
              className="px-10 py-5 bg-white rounded-full font-bold text-lg inline-flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl"
              style={{ color: theme.blue }}
            >
              Schedule Your Consultation <ArrowRight size={24} />
            </button>
          </Link>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-white text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle size={18} />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} />
              <span>Expert Advice</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} />
              <span>Same-Day Available</span>
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

export default Services;
