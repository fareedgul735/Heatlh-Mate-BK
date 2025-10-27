import transporter from "./emailTransporter.js";

const sendOtpNotification = async (email, otp) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "💙 HealthMate | Email Verification Code",
      html: `
  <div style="
    font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background: linear-gradient(180deg, #e0f2ff 0%, #f8fbff 100%);
    padding: 40px 0;
    text-align: center;
  ">
    <div style="
      background-color: #ffffff;
      max-width: 420px;
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
        margin-bottom: 8px;
      ">Verify Your Email</h2>

      <p style="
        color: #475569;
        font-size: 15px;
        margin-bottom: 22px;
      ">
        Welcome to <strong>HealthMate</strong>!  
        Use the OTP below to complete your signup process.
      </p>

      <div style="
        display: inline-block;
        background: linear-gradient(90deg, #38bdf8, #2563eb);
        color: #ffffff;
        font-size: 26px;
        font-weight: bold;
        letter-spacing: 5px;
        padding: 14px 28px;
        border-radius: 10px;
        margin-bottom: 20px;
      ">
        ${otp}
      </div>

      <p style="
        color: #64748b;
        font-size: 14px;
      ">This code expires in <strong>1 minute</strong>.</p>

      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 25px 0;">

      <p style="
        font-size: 13px;
        color: #94a3b8;
      ">
        If you didn’t request this verification, you can safely ignore this email.
      </p>

      <p style="
        font-size: 12px;
        color: #94a3b8;
        margin-top: 15px;
      ">
        ❤️ Stay Healthy & Secure with HealthMate<br>
        © ${new Date().getFullYear()} HealthMate. All rights reserved.
      </p>
    </div>
  </div>
  `,
    };

    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error("❌ Error sending OTP email:", err);
  }
};

export default sendOtpNotification;
