import nodemailer from "nodemailer"

const sendMail = (email) => {
  const options = {
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.ETHEREAL_NAME,
      pass: process.env.ETHEREAL_PASS,
    },
  }
  const client = nodemailer.createTransport(options)
  return client.sendMail(email)
}

export const sendEmailToMe = (adress: string) => {
  console.log("workl?")
  const email = {
    from: adress,
    to: "jsh901220@gmail.com",
    subject: "🔒Login Secret for Prismagram🔒",
    html: `Hello!`,
  }
  return sendMail(email)
}
