const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
  })

  module.exports = schema;