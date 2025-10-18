import transporter from "./emailTransporter.js";

const sendLoginNotification = async (email, userName) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "🏥 HealthMate | 🔔 New Login Detected",
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f7fc; padding: 30px; text-align: center;">
          <div style="background-color: #ffffff; max-width: 480px; margin: 0 auto; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); padding: 20px;">
            <img src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png" alt="HealthMate Logo" width="60" style="margin-bottom: 10px;" />
            <h2 style="color: #4f46e5;">HealthMate - New Login Detected</h2>
            <p style="color: #333;">Hi <strong>${userName}</strong>,</p>
            <p style="color: #555;">We noticed a new login to your account just now.</p>
            <p style="color: #555;">
              If this was you, you can safely ignore this email.<br>
            </p>
            <hr style="border: none; border-top: 1px solid #eee;">
            <p style="font-size: 12px; color: #999;">Login Time: ${new Date().toLocaleString()}</p>
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
