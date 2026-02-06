import { base_url } from "./base_url";
import commonApi from "./commonApi";

// Create new appointment
export const createAppointment = async (data) =>
  await commonApi(`${base_url}/appointments`, "POST", null, data);

// Get appointment by confirmation number
export const getAppointmentByConfirmation = async (confirmationNumber) =>
  await commonApi(`${base_url}/appointments/confirmation/${confirmationNumber}`, "GET");

// Cancel appointment
export const cancelAppointment = async (id, data) =>
  await commonApi(`${base_url}/appointments/${id}/cancel`, "PUT", null, data);

// Get user's appointments (requires authentication)
export const getMyAppointments = async () =>
  await commonApi(`${base_url}/appointments/my-appointments`, "GET");

// Admin routes (requires authentication and admin role)
export const getAllAppointments = async (params) => {
  const queryString = new URLSearchParams(params).toString();
  return await commonApi(`${base_url}/appointments?${queryString}`, "GET");
};

export const getAppointmentStats = async () =>
  await commonApi(`${base_url}/appointments/stats`, "GET");

export const getAppointmentById = async (id) =>
  await commonApi(`${base_url}/appointments/${id}`, "GET");

export const updateAppointmentStatus = async (id, data) =>
  await commonApi(`${base_url}/appointments/${id}/status`, "PUT", null, data);

export const updateAppointment = async (id, data) =>
  await commonApi(`${base_url}/appointments/${id}`, "PUT", null, data);

export const deleteAppointment = async (id) =>
  await commonApi(`${base_url}/appointments/${id}`, "DELETE");