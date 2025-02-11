// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend URL
  methods: ['POST'],
  credentials: true
}));
app.use(express.json());

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify transporter connection
transporter.verify((error) => {
  if (error) {
    console.error('Error with transporter:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

// Email endpoint
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL, // Your receiving email address
      subject: 'New Contact Form Submission',
      text: message,
      html: `<p>${message}</p>`,
    });

    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Error sending message',
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});