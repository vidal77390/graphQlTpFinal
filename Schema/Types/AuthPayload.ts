import { GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { TypeName } from "../../constants/GraphQL/TypeName";
import User from "./User";


export default new GraphQLObjectType({
    name: "AuthPayload",
    fields: {
        token: {
            type: GraphQLString,
        },
        message: {
            type: GraphQLString,
        },
        user: {
            type: User,
        },
    }
})