import transporter from "./emailTransporter.js";

const sendOtpNotification = async (email, otp) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Dummy Web",
      html: `
    <div style="
      font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #f4f7fc;
      padding: 40px 0;
      text-align: center;
    ">
      <div style="
        background-color: #ffffff;
        max-width: 420px;
        margin: 0 auto;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        padding: 30px;
      ">
        <h2 style="
          color: #333333;
          margin-bottom: 10px;
        ">Dummy Web OTP Code</h2>

        <p style="
          color: #555555;
          font-size: 16px;
          margin-bottom: 20px;
        ">
          Use the following code to complete your signup:
        </p>

        <div style="
          display: inline-block;
          background-color: #4f46e5;
          color: #ffffff;
          font-size: 26px;
          font-weight: bold;
          letter-spacing: 5px;
          padding: 14px 28px;
          border-radius: 8px;
          margin-bottom: 20px;
        ">
          ${otp}
        </div>

        <p style="
          color: #777777;
          font-size: 14px;
          margin-top: 10px;
        ">
          This code expires in <strong>1 minutes</strong>.
        </p>

        <hr style="border: none; border-top: 1px solid #eee; margin: 25px 0;">

        <p style="
          font-size: 13px;
          color: #999999;
        ">
          If you did not request this, you can safely ignore this email.
        </p>
      </div>
    </div>
  `,
    };

    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log(err);
  }
};

export default sendOtpNotification;
