import { request } from "graphql-request"

import { createServer } from "src/lib/server"
import { devHostAddress } from "../../server"

beforeAll(async () => {
  await createServer()
})

describe("email api", () => {
  it("test", async () => {
    const emailMutation = `mutation {
      sendMail($email: $email) 
    }`
    const response = await request(devHostAddress, emailMutation)
    expect(response).toEqual(true)
  })
})
