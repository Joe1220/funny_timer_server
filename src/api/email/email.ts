export default {
  Mutation: {
    sendEmailToMe: async (_: any, args: any) => {
      console.log("args", args, _)
      return true
    },
  },
}
