import { Resend } from 'resend';

// This will automatically use the RESEND_API_KEY from your Vercel environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, phone, message } = req.body;

  // Server-side validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required fields.' });
  }

  try {
    // Send the email using Resend
    await resend.emails.send({
      from: 'SwiftHire Contact Form <onboarding@resend.dev>',
      to: ['swifthire.official@gmail.com'], // This is where the emails will be sent
      subject: `New Message from ${name} via SwiftHire`,
      reply_to: email, // This lets you reply directly to the user
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Send a success response back to the frontend
    return res.status(200).json({ success: true, message: 'Message sent successfully!' });

  } catch (error) {
    console.error('Resend API Error:', error);
    return res.status(500).json({ success: false, message: 'Sorry, something went wrong. Please try again.' });
  }
}
