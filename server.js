require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.OWNER_EMAIL) {
  console.warn('Warning: SMTP settings or OWNER_EMAIL not fully configured. See .env.example');
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing required fields' });

  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.OWNER_EMAIL,
    subject: `[Website Contact] ${subject || 'New message'}`,
    text: `Name: ${name}\nPhone: ${phone || ''}\nEmail: ${email}\n\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Phone:</strong> ${phone || ''}</p><p><strong>Email:</strong> ${email}</p><hr/><p>${message}</p>`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    res.json({ ok: true });
  } catch (err) {
    console.error('Send mail error:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => console.log(`Contact API listening on port ${PORT}`));
