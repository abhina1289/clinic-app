require("dotenv").config();
const { sendAppointmentEmail } = require("../services/emailService");

const fakeAppointment = {
  confirmationNumber: "APT-000001",
  name: "Test Patient",
  phone: "+91 9876543210",
  email: "testpatient@gmail.com",
  bookingDate: new Date(),
  appointmentTime: "10:30 AM",
  appointmentWith: "Dr. Anjali Sharma",
  appointmentFor: "Hearing Test",
  status: "Confirmed",
  createdAt: new Date(),
};

(async () => {
  console.log("Sending test appointment email");
  await sendAppointmentEmail(fakeAppointment);
  console.log("Test appointment email sent!");
})();
