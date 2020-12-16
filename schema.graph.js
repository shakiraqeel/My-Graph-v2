const RootQueryType = require ("./root.query.type");
const RootMutationType = require ("./root.mutatation.type");
const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
  })

  module.exports = schema;