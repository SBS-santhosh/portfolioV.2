// api/contact.js — works directly on Vercel
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Allow CORS
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Handle preflight request
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message, subject } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const currentDate = new Date().toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });

    // Email to YOU
    const notificationToYou = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📬 Nouveau message de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>📩 Nouveau message depuis ton portfolio</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Sujet :</strong> ${subject || "Sans sujet"}</p>
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
          <hr />
          <small>📅 Reçu le ${currentDate}</small>
        </div>
      `,
      replyTo: email,
    };

    // Auto reply to the sender
    const autoReplyToCustomer = {
      from: `"Santhosh Satheeskumar" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ Votre message a bien été envoyé !",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Merci pour votre message, ${name} !</h2>
          <p>Votre message a bien été reçu. Je vous répondrai dès que possible.</p>
          <hr />
          <p><strong>Récapitulatif :</strong></p>
          <p><strong>Sujet :</strong> ${subject || "Sans sujet"}</p>
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
          <br/>
          <p>— <strong>Santhosh Satheeskumar</strong></p>
        </div>
      `,
    };

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(notificationToYou),
      transporter.sendMail(autoReplyToCustomer),
    ]);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error.message,
    });
  }
}
