import AuthPayload from "../Payload/AuthPayload";
import {GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import { v4 as uuidv4 } from 'uuid';
import {registerUser, getUserByUsername, createComment, deleteComment} from "../../database";
import * as bcrypt from 'bcryptjs';
import generateToken from '../../helpers/generateToken';
import { User } from "@supabase/gotrue-js";
import Comment from "./Comment";
import CommentInput from "../Inputs/PostCommentInput";
import ScoreEnum from "../Enums/ScoreEnum";
import PostCommentInput from "../Inputs/PostCommentInput";

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

    postCommentaire: {
      type: Comment,
      args: {
        input: {
          type: GraphQLNonNull(CommentInput)
        }
      },
      async resolve(parent, {input}) {
        const authorID = input.idUser;
        const brainTeaserID = input.idBrainTeaser;
        const comment = input.comment;
        const response = createComment(authorID, brainTeaserID, comment.text, comment.score )

        if (!response) {
          throw new Error('Register failed')
        }

        return {
          isPosted: true,
        }
      }
    },

    deleteCommentaire: {
      type: Comment,
      args: {
        commentID: {
          type: GraphQLNonNull(GraphQLID)
        },
        userID: {
          type: GraphQLNonNull(GraphQLID)
        }
      },
      async resolve(parent, {commentID, userID}) {
        const response = deleteComment(commentID, userID)

        if (!response) {
          throw new Error('Register failed')
        }

        return {
          isDeleted: true,
        }
      }
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
