import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_KEY,
  },
});
export async function POST(request: NextRequest) {
  try {
    const { fullname, email, message } = await request.json();
    if (!fullname || !email || !message) {
      return NextResponse.json({
        statusCode: 400,
        body: "Invalid request, missing required fields",
      });
    }
    const mailOptions = {
      to: process.env.EMAIL_ID,
      from: email,
      subject: `Message Portofolio `,
      html: `<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form Submission</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
      color: #333;
    }
    .container {
      width: 100%;
      max-width: 600px;
      margin: 20px auto;
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    h1 {
      color: #555;
      text-align: center;
    }
    p {
      font-size: 16px;
      line-height: 1.5;
    }
    .footer {
      margin-top: 20px;
      text-align: center;
      font-size: 14px;
      color: #999;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Contact Form Submission</h1>
    <p><strong>Full Name:</strong> ${fullname}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
    <div class="footer">
      <p>This email was generated from a contact form submission on your website.</p>
    </div>
  </div>
</body>
</html>`,
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      statusCode: 200,
      body: JSON.stringify({
        msg: "Message sent successfully",
      }),
    });
  } catch (error: any) {
    return NextResponse.json({
      statusCode: error.statusCode || 500,
      body: JSON.stringify({
        error: error.message || "Internal server error",
      }),
    });
  }
}
