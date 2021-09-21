import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './Schema';
import defaultQuery from './utils/defaultQuery';
import jwt = require("express-jwt")
require('dotenv').config()

var app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    context: { viewer: null },
    graphiql: {
      defaultQuery
    }
  })
);
app.use('/', (_, res) => {
  res.redirect('/graphql');
});
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');