import React, { useState, useEffect } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Award,
  Users,
  ThumbsUp,
} from "lucide-react";
import { Phone, Calendar } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Thiruvananthapuram",
      rating: 5,
      date: "January 2026",
      text: "Excellent service! Dr. Priya was very patient and thorough in explaining my hearing condition. The hearing aids recommended have truly changed my quality of life. Highly recommend Naavika!",
      service: "Hearing Aid Fitting",
    },
    {
      id: 2,
      name: "Meera Nair",
      location: "Kollam",
      rating: 5,
      date: "December 2025",
      text: "The staff at Naavika are incredibly professional and caring. They took time to understand my needs and provided the perfect solution. The clinic is clean, modern, and welcoming.",
      service: "Hearing Assessment",
    },
    {
      id: 3,
      name: "Anand Pillai",
      location: "Kochi",
      rating: 5,
      date: "January 2026",
      text: "I was hesitant about getting hearing aids, but the team at Naavika made the entire process comfortable. The follow-up care has been exceptional. Thank you for giving me my confidence back!",
      service: "Tinnitus Management",
    },
    {
      id: 4,
      name: "Lakshmi Devi",
      location: "Alappuzha",
      rating: 5,
      date: "November 2025",
      text: "Outstanding experience from start to finish. The audiologist explained everything clearly and the hearing aids are barely noticeable yet so effective. Worth every penny!",
      service: "Hearing Aid Fitting",
    },
    {
      id: 5,
      name: "Suresh Menon",
      location: "Thrissur",
      rating: 5,
      date: "December 2025",
      text: "Very impressed with the advanced technology and personalized care at Naavika. They didn't just sell me a product; they genuinely cared about improving my hearing health.",
      service: "Comprehensive Checkup",
    },
    {
      id: 6,
      name: "Divya Krishnan",
      location: "Kozhikode",
      rating: 5,
      date: "January 2026",
      text: "The best hearing clinic I've visited! Professional, compassionate, and results-driven. My father can now hear clearly after years of struggling. Forever grateful!",
      service: "Senior Care Program",
    },
  ];

  const stats = [
    { icon: Users, value: "5000+", label: "Happy Patients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: ThumbsUp, value: "98%", label: "Satisfaction Rate" },
    { icon: Star, value: "4.9/5", label: "Average Rating" },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1
            className={`text-5xl font-bold mb-4 transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
          >
            NAAVIKA
          </h1>
          <p
            className={`text-2xl mb-2 transition-all duration-1000 delay-200 transform ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
          >
            Hearing Health Clinic
          </p>
          <p
            className={`text-lg text-teal-100 transition-all duration-1000 delay-300 transform ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
          >
            What Our Patients Say About Us
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 -mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-700 transform hover:scale-105 hover:shadow-xl ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              >
                <IconComponent className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-800 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Featured Review Carousel */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Featured Patient Stories
        </h2>

        <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <Quote className="absolute top-6 left-6 w-12 h-12 text-teal-200" />

          <div className="relative z-10">
            <div className="flex items-center mb-4">
              {renderStars(reviews[currentReview].rating)}
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
              "{reviews[currentReview].text}"
            </p>

            <div className="flex items-center justify-between border-t pt-6">
              <div>
                <div className="font-semibold text-gray-800 text-lg">
                  {reviews[currentReview].name}
                </div>
                <div className="text-gray-600 text-sm">
                  {reviews[currentReview].location} •{" "}
                  {reviews[currentReview].date}
                </div>
                <div className="text-teal-600 text-sm mt-1 font-medium">
                  {reviews[currentReview].service}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prevReview}
                  className="p-2 rounded-full bg-teal-100 text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextReview}
                  className="p-2 rounded-full bg-teal-100 text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentReview
                    ? "w-8 bg-teal-600"
                    : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* All Reviews Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          More Patient Reviews
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => {
            // Get initials from name
            const getInitials = (name) => {
              return name
                .split(" ")
                .map((word) => word[0])
                .join("")
                .toUpperCase();
            };

            // Generate consistent colors based on index
            const avatarColors = [
              "bg-gradient-to-br from-teal-400 to-teal-600",
              "bg-gradient-to-br from-blue-400 to-blue-600",
              "bg-gradient-to-br from-purple-400 to-purple-600",
              "bg-gradient-to-br from-pink-400 to-pink-600",
              "bg-gradient-to-br from-indigo-400 to-indigo-600",
              "bg-gradient-to-br from-cyan-400 to-cyan-600",
            ];

            return (
              <div
                key={review.id}
                className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-full ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white font-bold text-lg mr-3 flex-shrink-0`}
                  >
                    {getInitials(review.name)}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">
                      {review.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {review.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  {renderStars(review.rating)}
                </div>

                <p className="text-gray-700 mb-4 line-clamp-4 text-sm">
                  "{review.text}"
                </p>

                <div className="border-t pt-3 flex items-center justify-between">
                  <div className="text-xs text-teal-600 font-medium">
                    {review.service}
                  </div>
                  <div className="text-xs text-gray-500">{review.date}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Improve Your Hearing Health?
          </h2>
          <p className="text-lg mb-8 text-teal-100">
            Join thousands of satisfied patients who trust Naavika for their
            hearing care
          </p>
          <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Book Your Appointment Today
          </button>
        </div>
      </div>
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
  );
}
