import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { CREATE_USER } from "./mutations/User";
import { GET_USERS } from "./queries/User";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getUsers: GET_USERS,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Muatation",
  fields: {
    createUser: CREATE_USER,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
