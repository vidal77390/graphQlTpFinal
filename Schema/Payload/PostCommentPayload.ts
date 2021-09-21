

import {GraphQLBoolean, GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import { TypeName } from "../../Constants/GraphQL/TypeName";
import User from "../Types/User";
import Comment from "../Types/Comment";
import BrainTeaser from "../Interface/BrainTeaser";


export default new GraphQLObjectType({
    name: "CommentPayload",
    fields: {
        isPosted: {
            type: GraphQLBoolean
        },
        comment: {
            type: Comment
        },
        brainTeaser: {
            type: BrainTeaser
        }
    }
})