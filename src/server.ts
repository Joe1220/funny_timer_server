import { GraphQLServer } from "graphql-yoga"
import logger from "morgan"
import schema from "./schema"

const PORT = process.env.PORT || 4000

export const devHostAddress = ` http://localhost:${PORT}`

const server = new GraphQLServer({ schema })

server.express.use(logger("dev"))

server.start({ port: PORT }, () => console.log(`Server running on ${devHostAddress}`))
