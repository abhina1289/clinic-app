const { Resend } = require("resend");
const { generateAppointmentTemplate } = require("../templates/appointmentEmail");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendAppointmentEmail = async (appointment) => {
  const html = generateAppointmentTemplate(appointment);

  return await resend.emails.send({
    from: "Naavika Hearing Care <info@naavikahearing.com>",
    to: ["info@naavikahearing.com"],
    subject: `New Appointment - ${appointment.confirmationNumber}`,
    html
  });
};

module.exports = { sendAppointmentEmail };