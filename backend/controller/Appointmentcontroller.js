const Appointment = require('../models/AppointmentModel');
const { sendAppointmentEmail } = require('../services/emailService');

// @desc    Create new appointment
// @route   POST /api/appointments
// @access  Public
exports.createAppointment = async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      bookingDate,
      appointmentWith,
      appointmentFor,
      notes
    } = req.body;

    // Get IP address
    const ipAddress = req.ip || req.connection.remoteAddress;

    // Create appointment
    const appointment = await Appointment.create({
      name,
      phone,
      email,
      bookingDate,
      appointmentWith,
      appointmentFor,
      notes,
      ipAddress,
      source: 'website'
    });

    await sendAppointmentEmail(appointment);

    res.status(201).json({
      success: true,
      message: 'Appointment booked successfully! You will receive a confirmation email shortly.',
      data: {
        appointment: {
          id: appointment._id,
          confirmationNumber: appointment.confirmationNumber,
          name: appointment.name,
          email: appointment.email,
          phone: appointment.phone,
          bookingDate: appointment.bookingDate,
          appointmentWith: appointment.appointmentWith,
          appointmentFor: appointment.appointmentFor,
          status: appointment.status
        }
      }
    });
  } catch (error) {
    console.error('Create Appointment Error:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }

    // Handle duplicate confirmation number (rare case)
    if (error.code === 11000) {
      return res.status(500).json({
        success: false,
        message: 'Error generating confirmation number. Please try again.'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error while booking appointment'
    });
  }
};

// @desc    Get all appointments
// @route   GET /api/appointments
// @access  Private/Admin
exports.getAllAppointments = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const status = req.query.status;
    const date = req.query.date;

    // Build query
    let query = {};
    if (status) query.status = status;
    if (date) {
      const startDate = new Date(date);
      const endDate = new Date(date);
      endDate.setDate(endDate.getDate() + 1);
      query.bookingDate = { $gte: startDate, $lt: endDate };
    }

    const appointments = await Appointment.find(query)
      .limit(limit)
      .skip(skip)
      .sort('-createdAt');

    const total = await Appointment.countDocuments(query);

    res.status(200).json({
      success: true,
      data: {
        appointments,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    console.error('Get All Appointments Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get appointment by ID
// @route   GET /api/appointments/:id
// @access  Private/Admin
exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found'
      });
    }

    res.status(200).json({
      success: true,
      data: { appointment }
    });
  } catch (error) {
    console.error('Get Appointment Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get appointment by confirmation number
// @route   GET /api/appointments/confirmation/:confirmationNumber
// @access  Public
exports.getAppointmentByConfirmation = async (req, res) => {
  try {
    const appointment = await Appointment.findOne({
      confirmationNumber: req.params.confirmationNumber
    });

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found'
      });
    }

    res.status(200).json({
      success: true,
      data: { appointment }
    });
  } catch (error) {
    console.error('Get Appointment by Confirmation Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Update appointment status
// @route   PUT /api/appointments/:id/status
// @access  Private/Admin
exports.updateAppointmentStatus = async (req, res) => {
  try {
    const { status, cancellationReason } = req.body;

    if (!status) {
      return res.status(400).json({
        success: false,
        message: 'Please provide status'
      });
    }

    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found'
      });
    }

    appointment.status = status;

    // Handle confirmation
    if (status === 'confirmed') {
      appointment.confirmedAt = new Date();
    }

    // Handle cancellation
    if (status === 'cancelled') {
      appointment.cancelledAt = new Date();
      if (cancellationReason) {
        appointment.cancellationReason = cancellationReason;
      }
    }

    await appointment.save();

    // TODO: Send status update email
    // await sendAppointmentStatusEmail(appointment);

    res.status(200).json({
      success: true,
      message: 'Appointment status updated successfully',
      data: { appointment }
    });
  } catch (error) {
    console.error('Update Appointment Status Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Update appointment details
// @route   PUT /api/appointments/:id
// @access  Private/Admin
exports.updateAppointment = async (req, res) => {
  try {
    const {
      bookingDate,
      appointmentTime,
      appointmentWith,
      appointmentFor,
      notes
    } = req.body;

    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found'
      });
    }

    // Update fields if provided
    if (bookingDate) appointment.bookingDate = bookingDate;
    if (appointmentTime) appointment.appointmentTime = appointmentTime;
    if (appointmentWith) appointment.appointmentWith = appointmentWith;
    if (appointmentFor) appointment.appointmentFor = appointmentFor;
    if (notes !== undefined) appointment.notes = notes;

    await appointment.save();

    res.status(200).json({
      success: true,
      message: 'Appointment updated successfully',
      data: { appointment }
    });
  } catch (error) {
    console.error('Update Appointment Error:', error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Cancel appointment
// @route   PUT /api/appointments/:id/cancel
// @access  Public (with email verification)
exports.cancelAppointment = async (req, res) => {
  try {
    const { email, cancellationReason } = req.body;

    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found'
      });
    }

    // Verify email matches
    if (appointment.email !== email) {
      return res.status(403).json({
        success: false,
        message: 'Email does not match appointment records'
      });
    }

    // Check if appointment can be cancelled
    if (appointment.status === 'cancelled') {
      return res.status(400).json({
        success: false,
        message: 'Appointment is already cancelled'
      });
    }

    if (appointment.status === 'completed') {
      return res.status(400).json({
        success: false,
        message: 'Cannot cancel a completed appointment'
      });
    }

    // Check if appointment can be modified (24 hours before)
    if (!appointment.canModify()) {
      return res.status(400).json({
        success: false,
        message: 'Cannot cancel appointment less than 24 hours before scheduled time'
      });
    }

    appointment.status = 'cancelled';
    appointment.cancelledAt = new Date();
    appointment.cancellationReason = cancellationReason;

    await appointment.save();

    res.status(200).json({
      success: true,
      message: 'Appointment cancelled successfully'
    });
  } catch (error) {
    console.error('Cancel Appointment Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Delete appointment
// @route   DELETE /api/appointments/:id
// @access  Private/Admin
exports.deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Appointment deleted successfully'
    });
  } catch (error) {
    console.error('Delete Appointment Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get appointment statistics
// @route   GET /api/appointments/stats
// @access  Private/Admin
exports.getAppointmentStats = async (req, res) => {
  try {
    const total = await Appointment.countDocuments();
    const pending = await Appointment.countDocuments({ status: 'pending' });
    const confirmed = await Appointment.countDocuments({ status: 'confirmed' });
    const cancelled = await Appointment.countDocuments({ status: 'cancelled' });
    const completed = await Appointment.countDocuments({ status: 'completed' });

    // Today's appointments
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const todayAppointments = await Appointment.countDocuments({
      bookingDate: { $gte: today, $lt: tomorrow }
    });

    res.status(200).json({
      success: true,
      data: {
        total,
        pending,
        confirmed,
        cancelled,
        completed,
        todayAppointments
      }
    });
  } catch (error) {
    console.error('Get Stats Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};