import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // 1. DEBUGGING: Log incoming request and env config
  console.log('--- Incoming contact request ---');
  console.log('Method:', req.method);
  console.log('Body:', req.body);
  console.log('SMTP_HOST:', process.env.SMTP_HOST);
  console.log('SMTP_PORT:', process.env.SMTP_PORT);
  console.log('SMTP_USER:', process.env.SMTP_USER ? 'Exists (Hidden)' : 'MISSING');
  console.log('SMTP_PASSWORD:', process.env.SMTP_PASSWORD ? 'Exists (Hidden)' : 'MISSING');

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields: name, email, or message' });
  }

  // 2. CHECK ENVIRONMENT VARIABLES
  if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    console.error('CRITICAL ERROR: Missing SMTP environment variables.');
    return res.status(500).json({ 
      success: false, 
      message: 'Server configuration error. SMTP credentials missing.' 
    });
  }

  try {
    // 3. BACKEND FIX: Use Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: false, // true for 465, false for other ports (587)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD.replace(/\s+/g, ''), // Remove potential spaces from password
      },
    });

    // Setup email data
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, // Send to the same account
      replyTo: email,
      subject: 'New Contact Message',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<h3>New Contact Message</h3>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully. MessageId:', info.messageId);

    // 4. Return success response
    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    // Log detailed error from Nodemailer in console
    console.error('--- NODEMAILER ERROR ---');
    console.error(error);
    
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send email. Please check server logs.',
      errorDetails: error.message 
    });
  }
}
