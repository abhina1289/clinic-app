import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import {
  Calendar, Clock, User, Phone,
  CheckCircle, ArrowRight, Bell,
} from "lucide-react";
import { createAppointment } from "../../services/allApis";

const theme = {
  red: "#c92424",
  blue: "#4484c4",
  green: "#3a9f43",
  textDark: "#222",
};

const appointmentTypes = [
  "Hearing Test",
  "Hearing Aids",
  "Audiology Consultation",
  "Hearing Aid Reprogramming",
  "Services & Repairs",
];

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "", phone: "", bookingDate: "", appointmentFor: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState("");
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(formData.phone)) {
      newErrors.phone = "Please provide a valid phone number";
    }
    if (!formData.bookingDate) {
      newErrors.bookingDate = "Booking date is required";
    } else {
      const selectedDate = new Date(formData.bookingDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) newErrors.bookingDate = "Booking date cannot be in the past";
    }
    if (!formData.appointmentFor) newErrors.appointmentFor = "Please select appointment type";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill in all required fields correctly");
      return;
    }
    setIsSubmitting(true);
    try {
      const appointmentData = {
        name: formData.name,
        phone: formData.phone,
        email: `${formData.phone}@noemail.com`,
        bookingDate: formData.bookingDate,
        appointmentWith: "To Be Assigned",
        appointmentFor: formData.appointmentFor,
        notes: "",
      };
      const response = await createAppointment(appointmentData);
      if (response.data.success) {
        const appointment = response.data.data.appointment;
        setConfirmationNumber(appointment.confirmationNumber);
        setShowSuccess(true);
        toast.success("Appointment booked successfully!", {
          description: `Confirmation #: ${appointment.confirmationNumber}`,
        });
        setTimeout(() => {
          setShowSuccess(false);
          setFormData({ name: "", phone: "", bookingDate: "", appointmentFor: "" });
          setConfirmationNumber("");
        }, 5000);
      }
    } catch (error) {
      console.error("Appointment booking error:", error);
      if (error.response?.data?.message) {
        toast.error("Booking Failed", { description: error.response.data.message });
      } else {
        toast.error("Failed to book appointment", {
          description: "Please try again later or contact support",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2"
      style={{ borderColor: `${theme.blue}20` }}>
      {/* Header */}
      <div className="p-8 text-white relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${theme.blue}, ${theme.green})` }}>
        <motion.div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <div className="relative z-10 flex items-center gap-3">
          <motion.div animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
            <Calendar size={32} />
          </motion.div>
          <div>
            <h2 className="text-3xl font-bold">Book Appointment</h2>
            <p className="text-white/80 mt-1">Fill in your details below</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        <AnimatePresence mode="wait">
          {showSuccess ? (
            <motion.div key="success"
              initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }} className="text-center py-12">
              <motion.div className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6"
                style={{ backgroundColor: `${theme.green}20` }}
                animate={{ rotate: 360 }} transition={{ duration: 1 }}>
                <CheckCircle size={48} style={{ color: theme.green }} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: theme.green }}>Appointment Booked!</h3>
              <p className="text-gray-600 mb-3">Confirmation Number:</p>
              <div className="inline-block px-4 py-2 bg-blue-50 rounded-lg">
                <span className="text-xl font-mono font-bold" style={{ color: theme.blue }}>
                  {confirmationNumber}
                </span>
              </div>
              <p className="text-gray-500 mt-4 text-sm">We'll call you to confirm shortly.</p>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <User size={16} style={{ color: theme.blue }} />
                  Name <span className="text-red-500">*</span>
                </label>
                <input type="text" name="name" value={formData.name}
                  onChange={handleInputChange} placeholder="Enter your full name"
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all ${errors.name ? "border-red-300 focus:border-red-500" : "border-gray-200 focus:border-blue-500"}`} />
                {errors.name && <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs">{errors.name}</motion.p>}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Phone size={16} style={{ color: theme.green }} />
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input type="tel" name="phone" value={formData.phone}
                  onChange={handleInputChange} placeholder="Enter phone number"
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all ${errors.phone ? "border-red-300 focus:border-red-500" : "border-gray-200 focus:border-blue-500"}`} />
                {errors.phone && <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs">{errors.phone}</motion.p>}
              </div>

              {/* Booking Date */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Calendar size={16} style={{ color: theme.blue }} />
                  Booking Date <span className="text-red-500">*</span>
                </label>
                <input type="date" name="bookingDate" value={formData.bookingDate}
                  onChange={handleInputChange} min={new Date().toISOString().split("T")[0]}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all ${errors.bookingDate ? "border-red-300 focus:border-red-500" : "border-gray-200 focus:border-blue-500"}`} />
                {errors.bookingDate && <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs">{errors.bookingDate}</motion.p>}
              </div>

              {/* Appointment Type */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Clock size={16} style={{ color: theme.red }} />
                  Appointment For <span className="text-red-500">*</span>
                </label>
                <select name="appointmentFor" value={formData.appointmentFor}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all appearance-none bg-white ${errors.appointmentFor ? "border-red-300 focus:border-red-500" : "border-gray-200 focus:border-blue-500"}`}>
                  <option value="">Select Appointment Type</option>
                  {appointmentTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
                {errors.appointmentFor && <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs">{errors.appointmentFor}</motion.p>}
              </div>

              {/* Submit */}
              <motion.button type="submit" disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-bold text-lg text-white flex items-center justify-center gap-3 transition-all"
                style={{ background: isSubmitting ? "#9ca3af" : `linear-gradient(135deg, ${theme.blue}, ${theme.green})` }}
                whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}>
                {isSubmitting ? (
                  <><motion.div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />Booking...</>
                ) : (<>Book Appointment <ArrowRight size={20} /></>)}
              </motion.button>

              {/* Notice */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                className="flex items-start gap-2 p-4 bg-blue-50 rounded-xl">
                <Bell size={20} style={{ color: theme.blue }} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600">
                  You'll receive a confirmation call within 24 hours to confirm your appointment time.
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}

export default BookingForm;