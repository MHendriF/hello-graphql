import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
type Query {
    hello: String
    goodbye: String
    greeting: String
}`;
const resolvers = {
  Query: {
    hello: () => {
      return "Hello world";
    },
    goodbye: () => {
      return "Goodbye world";
    },
    greeting: () => "Hendri Febriansyah",
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
