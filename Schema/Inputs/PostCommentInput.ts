import {GraphQLID, GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import { TypeName } from "../../Constants/GraphQL/TypeName";
import User from "../Types/User";
import Comment from "../Types/Comment";
import ScoreEnum from "../Enums/ScoreEnum";

const CommentInput= new GraphQLInputObjectType({
    name: "CommentInput",
    fields: {
        text: { type: GraphQLNonNull(GraphQLString) },
        score: { type: GraphQLNonNull(ScoreEnum) }
    }
});

export default new GraphQLInputObjectType({
    name: "PostCommentInput",
    fields: {
        idUser: {
            type: GraphQLNonNull(GraphQLID),
        },
        idBrainTeaser: {
            type: GraphQLNonNull(GraphQLID),
        },
        comment: {
            type: GraphQLNonNull(CommentInput)
        },
    }
})

