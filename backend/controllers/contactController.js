const { sendMail } = require("../services/emailService");

exports.submitContactForm = async (req, res) => {
  try {
    const { name, company, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required",
      });
    }

    // Trigger email send without awaiting (Non-blocking for fast UI)
    sendMail({
      to: "anmolchauhan@alirapharmaceuticals.com",
      cc: ["akshat99055@gmail.com", "errorr990551@gmail.com"],
      subject: "New Contact Us Enquiry",
      html: `
        <h2>New Contact Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Company:</b> ${company || "N/A"}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    })
      .then((result) => console.log("Background Email SENT:", result))
      .catch((error) => console.error("Background Email FAILED:", error));

    // Respond immediately to the frontend
    res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
};
