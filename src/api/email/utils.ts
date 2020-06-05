import nodemailer from "nodemailer"
import dotenv from "dotenv"

import { SendEmail } from "./types"

dotenv.config()

const sendMail = async (email) => {
  const options = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: "rpehdrnfm1@gmail.com",
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_PASS,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      accessToken: process.env.OAUTH_ACCESS_TOKEN,
      expires: 3600
    }
  }
  const client = nodemailer.createTransport(options)
  try {
    await client.sendMail(email)
    client.close()
  } catch (error) {
    console.log("nodemailer fail : ", error)
    throw new Error("nodemailer fail")
  }
}

export const sendEmail = async ({ email, subject = "[funny timer 요청사항]", html }: SendEmail) => {
  console.log("checking error: ", email, subject, html)
  const emailOption = {
    from: email,
    to: "jsh901220@gmail.com",
    subject: `[funny timer 요청사항] ${subject}`,
    html
  }
  return sendMail(emailOption)
}
