const { Resend } = require("resend");
const {
  generateAppointmentTemplate,
} = require("../templates/appointmentEmail");
const nodemailer = require("nodemailer"); // ✅

const resend = new Resend(process.env.RESEND_API_KEY);

const sendAppointmentEmail = async (appointment) => {
  const html = generateAppointmentTemplate(appointment);

  const response = await resend.emails.send({
    from: "Naavika Hearing Care <info@naavikahearing.com>",
    to: ["info@naavikahearing.com"],
    subject: `New Appointment - ${appointment.confirmationNumber}`,
    html,
  });

  // console.log("RESEND RESPONSE:", response);
  return response;
};

module.exports = { sendAppointmentEmail };
