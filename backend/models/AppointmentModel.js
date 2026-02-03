const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  // User reference (if user is logged in)
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  
  // Basic Information
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long'],
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  phone: {
    type: String,
    required: [true, 'Please provide your phone number'],
    trim: true,
    match: [
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      'Please provide a valid phone number'
    ]
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    lowercase: true,
    trim: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email'
    ]
  },
  
  // Appointment Details
  bookingDate: {
    type: Date,
    required: [true, 'Please select a booking date'],
    validate: {
      validator: function(value) {
        // Ensure booking date is not in the past
        return value >= new Date().setHours(0, 0, 0, 0);
      },
      message: 'Booking date cannot be in the past'
    }
  },
  appointmentTime: {
    type: String,
    default: null // e.g., "10:00 AM" - can be set by admin/system
  },
  appointmentWith: {
    type: String,
    required: [true, 'Please select an audiologist'],
    trim: true
  },
  appointmentFor: {
    type: String,
    required: [true, 'Please select appointment type'],
    enum: [
      'Hearing Assessment',
      'Hearing Aid Fitting',
      'Hearing Aid Adjustment',
      'Tinnitus Consultation',
      'Follow-up Visit',
      'Pediatric Hearing Test',
      'Ear Wax Removal',
      'Hearing Aid Repair',
      'Other'
    ]
  },
  
  // Additional Information
  notes: {
    type: String,
    maxlength: [500, 'Notes cannot exceed 500 characters'],
    default: null
  },
  
  // Status Management
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed', 'no-show'],
    default: 'pending'
  },
  
  // Confirmation Details
  confirmationNumber: {
    type: String,
    unique: true,
    sparse: true // Allows multiple null values
  },
  confirmedAt: {
    type: Date,
    default: null
  },
  confirmedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  
  // Cancellation Details
  cancelledAt: {
    type: Date,
    default: null
  },
  cancellationReason: {
    type: String,
    maxlength: [500, 'Cancellation reason cannot exceed 500 characters'],
    default: null
  },
  
  // Reminder Sent
  reminderSent: {
    type: Boolean,
    default: false
  },
  reminderSentAt: {
    type: Date,
    default: null
  },
  
  // Metadata
  source: {
    type: String,
    enum: ['website', 'phone', 'walk-in', 'admin'],
    default: 'website'
  },
  ipAddress: {
    type: String,
    default: null
  },
  
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Generate confirmation number before saving
appointmentSchema.pre('save', function(next) {
  if (!this.confirmationNumber) {
    // Generate a unique confirmation number (e.g., APT-20240123-XXXX)
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const random = Math.floor(1000 + Math.random() * 9000);
    this.confirmationNumber = `APT-${date}-${random}`;
  }
  next();
});

// Index for faster queries
appointmentSchema.index({ bookingDate: 1, status: 1 });
appointmentSchema.index({ email: 1 });
appointmentSchema.index({ confirmationNumber: 1 });
appointmentSchema.index({ user: 1 });

// Virtual for formatted date
appointmentSchema.virtual('formattedDate').get(function() {
  return this.bookingDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
});

// Method to check if appointment can be modified
appointmentSchema.methods.canModify = function() {
  const now = new Date();
  const appointmentDate = new Date(this.bookingDate);
  const hoursDifference = (appointmentDate - now) / (1000 * 60 * 60);
  
  // Can modify if appointment is more than 24 hours away and not completed/cancelled
  return hoursDifference > 24 && !['completed', 'cancelled'].includes(this.status);
};

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;