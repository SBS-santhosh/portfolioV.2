// api/contact.js - Place this in your project root
const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message, subject } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const currentDate = new Date().toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    });

    // EMAIL 1: Send to YOU (notification of new contact)
    const notificationToYou = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `📬 New Contact from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #2563eb; margin-top: 0;">🎉 Someone Tried to Contact You!</h2>
            
            <div style="background-color: #f0f9ff; padding: 15px; border-left: 4px solid #2563eb; margin: 20px 0;">
              <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject || 'No subject'}</p>
            </div>

            <div style="background-color: #fefce8; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #fde047;">
              <h3 style="color: #854d0e; margin-top: 0;">📝 Message:</h3>
              <p style="color: #713f12; white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>

            <div style="background-color: #fef2f2; padding: 15px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #ef4444;">
              <p style="color: #991b1b; margin: 0; font-weight: bold;">⚡ Don't be lazy, Santhosh! Reply to them ASAP!</p>
            </div>

            <p style="color: #6b7280; font-size: 12px; margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 15px;">
              📅 Received: ${currentDate}
            </p>
          </div>
        </div>
      `,
      replyTo: email
    };

    // EMAIL 2: Send to CUSTOMER (auto-reply in French)
    const autoReplyToCustomer = {
      from: `Santhosh Satheeskumar <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Merci pour votre message !`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #2563eb; margin-top: 0;">Merci pour votre message !</h2>
            
            <p style="font-size: 16px; line-height: 1.6; color: #374151;">
              Bonjour <strong>${name}</strong>,
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #374151;">
              Merci de nous avoir contactés ! Votre message a bien été reçu et je vous répondrai dans les plus brefs délais.
            </p>

            <div style="background-color: #dcfce7; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #22c55e;">
              <p style="margin: 0; color: #166534; font-weight: 600;">✅ Santhosh vous répondra dès que possible !</p>
            </div>

            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #bfdbfe;">
              <h3 style="color: #1e40af; margin-top: 0;">📨 Votre message :</h3>
              <p style="margin: 5px 0; color: #1e3a8a;"><strong>Sujet:</strong> ${subject || 'Sans objet'}</p>
              <div style="background-color: white; padding: 15px; border-radius: 6px; margin-top: 10px;">
                <p style="color: #374151; white-space: pre-wrap; line-height: 1.6; margin: 0;">${message}</p>
              </div>
            </div>

            <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
              <p style="margin: 0; color: #92400e;">
                <strong>⚡ Si votre demande est urgente,</strong> vous pouvez répondre directement à cet e-mail.
              </p>
            </div>

            <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-top: 30px;">
              Bien cordialement,<br>
              <strong style="color: #2563eb;">Santhosh Satheeskumar</strong>
            </p>

            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">

            <p style="font-size: 12px; color: #9ca3af; text-align: center; margin: 0;">
              <em>Ceci est une réponse automatique. Merci de ne pas répondre directement à cet e-mail.</em>
            </p>

            <p style="color: #9ca3af; font-size: 11px; margin-top: 15px; text-align: center;">
              📅 ${currentDate}
            </p>
          </div>
        </div>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(notificationToYou),
      transporter.sendMail(autoReplyToCustomer)
    ]);

    return res.status(200).json({ 
      success: true, 
      message: 'Emails sent successfully!' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send email',
      error: error.message
    });
  }
}