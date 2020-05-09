import { GraphQLServer } from "graphql-yoga"
import logger from "morgan"
import cors from "cors"
import helmet from "helmet"

import { PORT } from "./env"
import schema from "../api/index"

export const createServer = async () => {
  const server = new GraphQLServer({ schema })

  // middleware 추가
  server.express.use(logger("dev"))
  server.express.use(cors())
  server.express.use(helmet())

  return server.start({ port: PORT })
}
