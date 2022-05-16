import nodemailer from "nodemailer";
import { verificationTemplate } from "./email.template.js";

export const sendEmailVerification = async (email, token) => {
  const data = {
    title: "Verification email",
    description:
      "You successfully created an account on our website! Please verify youre account with the code we provided for you.",
  };
  return await sendEmail([email], "Verification", data, token);
};

const sendEmail = async (emails, subject, data, uniqtoken) => {
  const receivers = emails.join(", ").toString();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user:"" , ////delete when on github for spam resons
      pass:"", ////delete when on github for spam resons
    },
  });
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Verify Bot" <dont-reply@jsguru.net>', // sender address
    to: receivers, // list of receivers
    subject: subject, // Subject line
    // text:text, // plain text body
    html: verificationTemplate(data, uniqtoken,receivers), // html body
  });
};
