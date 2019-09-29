const { GraphQLServer } = require('graphql-yoga'),
    typeDefs = `
        type Query {
            info: String!
        }
    `,
    resolvers = {
        Query: {
            info: () => `This is the APi of a Hackernews Clone`
        }
    },
    server = new GraphQLServer({
        typeDefs,
        resolvers
    });

server.start( () => console.log(`Server is running on http://localhost:4000`));
