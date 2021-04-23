import { GraphQLList } from "graphql";
import { Users } from "../../Entities/User";
import { UserType } from "../types/User";

export const GET_USERS = {
  type: new GraphQLList(UserType),
  resolve() {
    return Users.find();
  },
};
