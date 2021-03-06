const { GraphQLServer } = require('graphql-yoga'),
    typeDefs = `
        type Query {
            info: String!
            feed: [Link!]!
        }

        type Link {
            id: ID!
            description: String!
            url: String!
        }
    `
let links = [{
    id: 'link-0',
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL"
}];

const resolvers = {
        Query: {
            info: () => console.log("Hello from resolvers"),
            feed: () => links,
        },
        Link: {
            id: (parent) => parent.id,
            description: (parent) => parent.description,
            url: (parent) => parent.url
        },
    },
    server = new GraphQLServer({
        typeDefs,
        resolvers
    });

server.start( () => console.log(`Server is running on http://localhost:4000`));