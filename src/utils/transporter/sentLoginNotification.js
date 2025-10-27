import transporter from "./emailTransporter.js";

const sendLoginNotification = async (email, userName) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "💙 HealthMate | 🔔 New Login Detected",
      html: `
  <div style="
    font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background: linear-gradient(180deg, #e0f2ff 0%, #f8fbff 100%);
    padding: 40px 0;
    text-align: center;
  ">
    <div style="
      background-color: #ffffff;
      max-width: 480px;
      margin: 0 auto;
      border-radius: 16px;
      box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
      padding: 35px 25px;
      border-top: 6px solid #3b82f6;
    ">
      <div style="margin-bottom: 18px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="url(#grad)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38bdf8" />
              <stop offset="100%" stop-color="#2563eb" />
            </linearGradient>
          </defs>
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1 7.8 7.8 7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"></path>
          <polyline points="3 13 7 13 9 9 12 15 15 9 17 13 21 13"></polyline>
        </svg>
      </div>

      <h2 style="
        color: #1e293b;
        font-size: 22px;
        margin-bottom: 10px;
      ">New Login Detected</h2>

      <p style="color: #475569; font-size: 15px; margin-bottom: 20px;">
        Hi <strong>${userName}</strong>,
      </p>

      <p style="color: #475569; font-size: 15px; margin-bottom: 22px;">
        We noticed a new login to your HealthMate account.  
        If this was you, you can safely ignore this message.
      </p>

      <div style="
        background: linear-gradient(90deg, #38bdf8, #2563eb);
        color: #ffffff;
        display: inline-block;
        font-weight: bold;
        letter-spacing: 1px;
        border-radius: 8px;
        padding: 10px 20px;
        margin-bottom: 20px;
      ">
        Login Time: ${new Date().toLocaleString()}
      </div>

      <p style="
        color: #64748b;
        font-size: 14px;
        margin-top: 10px;
      ">
        Didn’t log in? We recommend resetting your password immediately to secure your account.
      </p>

      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 25px 0;">

      <p style="font-size: 12px; color: #94a3b8;">
        ❤️ Stay safe and healthy with HealthMate.<br>
        © ${new Date().getFullYear()} HealthMate, All rights reserved.
      </p>
    </div>
  </div>
  `,
    };
    await transporter.sendMail(mailOptions);
    console.log(`✅ Login notification sent to ${email}`);
  } catch (err) {
    console.error("❌ Failed to send login email:", err.message);
  }
};

export default sendLoginNotification;
