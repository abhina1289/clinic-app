const express = require('express');
const router = express.Router();
const {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  getAppointmentByConfirmation,
  getMyAppointments,
  updateAppointmentStatus,
  updateAppointment,
  cancelAppointment,
  deleteAppointment,
  getAppointmentStats
} = require('../controllers/appointmentController');
const { protect, authorize, optionalAuth } = require('../middleware/auth');

// Public routes
router.post('/', optionalAuth, createAppointment);
router.get('/confirmation/:confirmationNumber', getAppointmentByConfirmation);
router.put('/:id/cancel', cancelAppointment);

// Protected routes (authenticated users)
router.get('/my-appointments', protect, getMyAppointments);

// Admin routes
router.get('/', protect, authorize('admin'), getAllAppointments);
router.get('/stats', protect, authorize('admin'), getAppointmentStats);
router.get('/:id', protect, authorize('admin'), getAppointmentById);
router.put('/:id/status', protect, authorize('admin'), updateAppointmentStatus);
router.put('/:id', protect, authorize('admin'), updateAppointment);
router.delete('/:id', protect, authorize('admin'), deleteAppointment);

module.exports = router;