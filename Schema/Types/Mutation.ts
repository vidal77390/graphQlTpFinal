import AuthPayload from "./AuthPayload";
import { GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { v4 as uuidv4 } from 'uuid';
import { registerUser, getUserByUsername } from "../../database";
import * as bcrypt from 'bcryptjs';
import generateToken from '../../helpers/generateToken';
import { User } from "@supabase/gotrue-js";

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    registerUser: {
      type: AuthPayload,
      args: {
        username: {
          type: GraphQLString,
        },
        password: {
          type: GraphQLString,
        },
      },
      async resolve(parent, { username, password }) {
        const response = registerUser(username, await bcrypt.hash(password, 10))

        if (!response) {
          throw new Error('Register failed')
        }

        const token = generateToken(username, password);
        return {
          token,
          user: {
            username
          },
          message: 'User registered correctly',
        };
      },
    },

    loginUser: {
      type: AuthPayload,
      args: {
        username: {
          type: GraphQLString,
        },
        password: {
          type: GraphQLString,
        },
      },
      async resolve(parent, { username, password }) {
        const user = await getUserByUsername(username)

        if (!user) {
          throw new Error('No user with that username')
        }

        const valid = await bcrypt.compare(password, user.password)

        if (!valid) {
          throw new Error('Wrong password, try again.')
        }

        const token = generateToken(username, password);

        return {
          token,
          user: {
            username
          },
          message: 'Login Successful',
        };
      },
    },
  },
});
