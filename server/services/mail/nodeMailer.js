import nodemailer from "nodemailer";

export const createTransporter = () => {
  return nodemailer.createTransport({
    // service: 'gmail',
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SENDER_MAIL,
      pass: process.env.PASS,
    },
  });
};

export const sendWelcomeMail = async (email) => {
  const transporter = createTransporter();

  const mailInfo = {
    from: process.env.SENDER_MAIL,
    to: email,
    subject: "Welcome to MakeWell",
    text: "Welcome to MakeWell! We're glad to have you on board.",
    html: "<p>Welcome to MakeWell! We're glad to have you on board.</p>",
  };

  const info = await transporter.sendMail(mailInfo);
  console.log("Message sent: %s", info.messageId);
};
