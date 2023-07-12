import mailer from 'nodemailer';

export const sendEmail = async ({userEmail}) => {
    
    try {
        const transporter = await mailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.CONTACT_EMAIL, //configurar en .env
                pass: process.env.CONTACT_PASSWORD
            }
        });
    
        const mailOption = {
            from: "test@gmail.com",
            to: userEmail,
            subject: "Test Mail",
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", 
        }
    
        await transporter.sendMail(mailOption, (err, res) => {
            if(err){
               console.log(err)
               throw(err);
            }

            transporter.close()
            return res
        })

    } catch (error) {
        return error;
    }
}