import { createServer } from "../lib/server"

createServer().then(() => console.log(`✅ Server running on http://localhost:${process.env.PORT}`))
