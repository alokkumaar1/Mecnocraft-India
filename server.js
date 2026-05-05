import express from 'express';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Manually load and parse .env file
const envPath = path.join(__dirname, '.env');
console.log('\n=== Loading Environment Variables ===');
console.log('Env file path:', envPath);
console.log('Env file exists:', fs.existsSync(envPath));

// Manually parse .env file
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  const envLines = envContent.split('\n');
  
  console.log('Parsing .env file...');
  for (const line of envLines) {
    const trimmedLine = line.trim();
    if (trimmedLine && !trimmedLine.startsWith('#')) {
      const [key, ...valueParts] = trimmedLine.split('=');
      const value = valueParts.join('=');
      if (key) {
        process.env[key] = value;
        console.log(`✓ Set ${key}`);
      }
    }
  }
}

// Log environment variables
console.log('\n=== Environment Variables Loaded ===');
console.log('SMTP_HOST:', process.env.SMTP_HOST || '✗ NOT SET');
console.log('SMTP_PORT:', process.env.SMTP_PORT || '✗ NOT SET');
console.log('SMTP_USER:', process.env.SMTP_USER || '✗ NOT SET');
console.log('SMTP_PASSWORD:', process.env.SMTP_PASSWORD ? '✓ Loaded' : '✗ NOT SET');
console.log('====================================\n');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('dist'));

// API Route
app.post('/api/send-email', async (req, res) => {
  console.log('--- Incoming contact request ---');
  console.log('Body:', req.body);
  console.log('SMTP_HOST:', process.env.SMTP_HOST);
  console.log('SMTP_PORT:', process.env.SMTP_PORT);
  console.log('SMTP_USER:', process.env.SMTP_USER ? 'Exists (Hidden)' : 'MISSING');
  console.log('SMTP_PASSWORD:', process.env.SMTP_PASSWORD ? 'Exists (Hidden)' : 'MISSING');

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    console.error('CRITICAL ERROR: Missing SMTP environment variables.');
    return res.status(500).json({ 
      success: false, 
      message: 'Server configuration error. SMTP credentials missing.' 
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD.replace(/\s+/g, ''),
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: 'New Contact Message',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully. MessageId:', info.messageId);

    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('--- NODEMAILER ERROR ---');
    console.error(error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send email. Please check server logs.',
      errorDetails: error.message 
    });
  }
});

// Serve frontend
app.use((req, res) => {
  res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
