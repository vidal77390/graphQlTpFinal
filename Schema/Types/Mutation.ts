import AuthPayload from "./AuthPayload";
import {GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString} from "graphql";
import { v4 as uuidv4 } from 'uuid';
import {registerUser} from "../../database";
import * as bcrypt from 'bcryptjs';
import generateToken from '../../helpers/generateToken';

export default new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      registerUser: {
        type: AuthPayload,
        args: {
          username: {
            type: GraphQLString,
          },
          email: {
            type: GraphQLString,
          },
          password: {
            type: GraphQLString,
          },
        },
        async resolve(parent, { username, email, password }) {
          const id = uuidv4();
          registerUser(await bcrypt.hash(password, 10), username, password)
  
          const token = generateToken(id, email);
          return {
            token,
            user: {
              id,
              username
            },
            message: 'User registered correctly',
          };
        },
      },
    },
  });
  