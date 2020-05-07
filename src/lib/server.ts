import { GraphQLServer } from "graphql-yoga"
import logger from "morgan"
import cors from "cors"
import helmet from "helmet"

import { PORT } from "./env"
import schema from "src/api/index"
import { sendEmailToMe } from "src/utils/email"

export const createServer = async () => {
  const server = new GraphQLServer({ schema })

  // middleware 추가
  server.express.use(logger("dev"))
  server.express.use(cors())
  server.express.use(helmet())
  await sendEmailToMe("joe1220@daum.net")
  return server.start({ port: PORT })
}
