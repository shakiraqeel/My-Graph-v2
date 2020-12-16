const express = require('express')
const expressGraphQL = require('express-graphql')
const RootQueryType = require ("./root.query.type");
const RootMutationType = require ("./root.mutatation.type");
const schema = require ("./schema.graph");

const {
  GraphQLSchema
} = require('graphql');
const app = express()

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}))
app.listen(4500, () => console.log('Server Running'))