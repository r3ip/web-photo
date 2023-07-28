import * as dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

export const sendMail = async (email, message) => {

  try {

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: 'amadonunezm@gmail.com',
        pass: process.env.APPLICATION_PASSWORD
      }
    });
  
    const info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "valenzuelapier@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log(info);
    
  } catch (error) {
    console.log(error)
  }

}