import { GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { TypeName } from "../../Constants/GraphQL/TypeName";
import User from "../Types/User";


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