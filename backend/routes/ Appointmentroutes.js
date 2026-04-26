const express = require('express');
const router = express.Router();
const {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  getAppointmentByConfirmation,
  updateAppointmentStatus,
  updateAppointment,
  cancelAppointment,
  deleteAppointment,
  getAppointmentStats
} = require('../controller/Appointmentcontroller');
const { protect, authorize } = require('../middleware/Auth');

// Public routes
router.post('/', createAppointment);
router.get('/confirmation/:confirmationNumber', getAppointmentByConfirmation);
router.put('/:id/cancel', cancelAppointment);

// Admin routes (require authentication and admin role)
router.get('/', protect, authorize('admin'), getAllAppointments);
router.get('/stats', protect, authorize('admin'), getAppointmentStats);
router.get('/:id', protect, authorize('admin'), getAppointmentById);
router.put('/:id/status', protect, authorize('admin'), updateAppointmentStatus);
router.put('/:id', protect, authorize('admin'), updateAppointment);
router.delete('/:id', protect, authorize('admin'), deleteAppointment);

module.exports = router;