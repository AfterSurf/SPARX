import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import cors from "cors"

import {phoneData} from "./telefonbuch633bf1.js"


// GraphQL Schema
const schema = buildSchema(`
      type Query {
        number(name: String): [Phone]
        phones(name: String): [Phone]
      }
      type Phone {
        name: String,
        phone: String
      }
`);

function getPhone(args) {
    for (const phone of phoneData) {
        if (phone.id === args.id) {
        return phone;
        }
    }
}

function getNumber(args) {
    const results = []
    for (const phone of phoneData) {
        if (phone.name.toUpperCase().includes(args.name.toUpperCase())) {
        results.push(phone)
        }
    }
    return results
}

function getPhones() {
      return phoneData;
  }

// Resolver
const root = {
    phone: getPhone,
    number: getNumber,
    phones: getPhones,
  };

// Create an express server and GraphQL endpoint
const app = express();

app.use(cors())
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(5000, () => {
  console.log("GraphQL server with Express running on localhost:5000/graphql");
});
