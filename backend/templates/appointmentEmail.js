const generateAppointmentTemplate = (data) => {
  const LOGO_URL = "https://naavikahearing.com/logo.png";
  const CLINIC_NAME = "Naavika Hearing Health Clinic";

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
</head>
<body style="margin:0; padding:0; background:#f5f5f7; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:50px 0;">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:16px; box-shadow:0 10px 30px rgba(0,0,0,0.06);">

          <!-- Header -->
          <tr>
            <td style="padding:40px 40px 20px 40px; text-align:center;">
              <img src="${LOGO_URL}" height="42" alt="${CLINIC_NAME}" />
              <h1 style="
                margin:20px 0 0 0;
                font-size:26px;
                font-weight:600;
                background: linear-gradient(90deg, #dd4d3f, #e68b3a);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              ">
                New Appointment
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:10px 40px 40px 40px; color:#1f2933;">

              <p style="font-size:15px; color:#4b5563; margin-bottom:24px;">
                A new appointment has been booked in your system.
              </p>

              <div style="
                font-size:14px;
                color:#111827;
                padding:14px 16px;
                border-radius:10px;
                background:#f9fafb;
                border:1px solid #e5e7eb;
                margin-bottom:30px;
              ">
                <strong>Confirmation:</strong> ${data.confirmationNumber}
              </div>

              <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;">
                ${row("Patient", data.name)}
                ${row("Phone", data.phone)}
                ${row("Email", data.email)}
                ${row("Date", new Date(data.bookingDate).toDateString())}
                ${row("Service", data.appointmentFor)}
                ${row("Status", data.status)}
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="
              padding:20px 40px;
              text-align:center;
              font-size:12px;
              color:#9ca3af;
              border-top:1px solid #f0f0f0;
            ">
              ${CLINIC_NAME} · ${new Date(data.createdAt).toLocaleString()}
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
};

const row = (label, value) => `
<tr>
  <td style="padding:10px 0; color:#6b7280; width:160px;">
    ${label}
  </td>
  <td style="padding:10px 0; color:#111827;">
    ${value}
  </td>
</tr>
`;

module.exports = { generateAppointmentTemplate };
