import { GraphQLString } from "graphql";
import { Users } from "../../Entities/User";
import { UserType } from "../types/User";

export const CREATE_USER = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    user_name: { type: GraphQLString },
    password: { type: GraphQLString },
  },

  async resolve(parent: any, args: any) {
    const { name, user_name, password } = args;
    await Users.insert({ name, user_name, password });
    return args;
  },
};
