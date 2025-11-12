import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // IMPORTANT: Configure your email provider details in environment variables.
  // Create a .env.local file in the root of your project and add the following:
  // EMAIL_HOST=your_smtp_host
  // EMAIL_PORT=your_smtp_port
  // EMAIL_USER=your_email_username
  // EMAIL_PASS=your_email_password
  //
  // For example, for Gmail, you might use:
  // EMAIL_HOST=smtp.gmail.com
  // EMAIL_PORT=587
  // EMAIL_USER=youremail@gmail.com
  // EMAIL_PASS=yourapppassword
  // Make sure to generate an "App Password" for Gmail if you have 2FA enabled.

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: Number(process.env.EMAIL_PORT) === 465, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
  });


  // Set up email data
  const mailOptions = {
    from: `"Portfolio Contact Form" <${email}>`,
    to: 'astika327@gmail.com',
    subject: `New message from ${name}`,
    text: `
      You have received a new message from your portfolio contact form.

      Name: ${name}
      Email: ${email}
      Message: ${message}

      WhatsApp: 6282146178461
    `,
  };

  try {
    // Verify connection configuration
    await transporter.verify();
    // Send mail
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ success: false, message: 'Something went wrong. Please try again later.' }, { status: 500 });
  }
}
