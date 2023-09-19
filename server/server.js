import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

import {phoneData} from "./telefonbuch633bf1_id.js"


// GraphQL Schema
const schema = buildSchema(`
      type Query {
        phone(id: Int!): Phone
        number(name: String): [Phone]
        phones(name: String): [Phone]
      }
      type Phone {
        id: Int
        name: String,
        phone: String
      }
`);

// Get single Image using id
function getPhone(args) {
    for (const phone of phoneData) {
        if (phone.id === args.id) {
        return phone;
        }
    }
}

// TEST: for number geht!
function getNumber(args) {
    for (const phone of phoneData) {
        if (phone.name === args.name) {
        return [phone];
        }
    }
}

// toDO!
// query schreiben, dass er anhand des Namens sucht und schon mit den Anfangsbuchstaben anfängt


function getPhones() {
// function getPhones(args) {
    // if (args.category) {
    //   return imagesData.filter(
    //     (image) => image.category.toLowerCase() === args.category.toLowerCase()
    //   );
    // } else {
      return phoneData;
    // }
  }

  // Resolver
const root = {
    phone: getPhone,
    number: getNumber,
    phones: getPhones,
  };

  //Create an express server and GraphQL endpoint
const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

//Listening to our server
app.listen(5000, () => {
  console.log("GraphQL server with Express running on localhost:5000/graphql");
});
