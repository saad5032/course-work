import nodemailer from "nodemailer"
import config from "config"


async function sendEmail(emailBody){
    try{
        const transporter = nodemailer.createTransport({
            host: config.get( "EMAIL_SMTP.HOST"),
            port : 465,
            auth : {
                user : config.get("EMAIL_SMTP.AUTH.USER"),
                pass : config.get("EMAIL_SMTP.AUTH.PASSWORD"),
            },
        })

        const info = await transporter.sendMail({
            from : '"Team Haider" <kb0107@haider101.online>',
            to: emailBody.to,
            subject: emailBody.subject,
            text : emailBody.body

        })

        console.log("Message sent: %s ", info.messageId)
    }catch(err){
        console.log(err);
    }
}

sendEmail({
    to: "syedsaaduddin6@gmail.com",
    subject : "Random test",
    body: "hi saad here",
})

export default sendEmail