const express = require('express')
const expressGraphQL = require('express-graphql')
const RootQueryType = require ("./root.query.type");
const RootMutationType = require ("./root.mutatation.type");

const {
  GraphQLSchema
} = require('graphql');
const app = express()

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
})

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}))
app.listen(4500, () => console.log('Server Running'))