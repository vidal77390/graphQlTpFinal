import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import {TypeName} from "../../constants/GraphQL/TypeName";


export default new GraphQLObjectType( {
    name: TypeName.User,
    fields: {
        id: { type: GraphQLNonNull(GraphQLID) },
        username: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) }
    }
})