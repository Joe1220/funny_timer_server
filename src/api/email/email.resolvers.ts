import { sendEmail } from "./utils"
import { SendEmail } from "./types"

export default {
  Mutation: {
    sendEmailToHost: async (_: any, { email, subject, html }: SendEmail) => {
      try {
        await sendEmail({ email, subject, html })
        return true
      } catch (error) {
        return false
      }
    },
  },
}
