import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import {TypeName} from "../../Constants/GraphQL/TypeName";


export default new GraphQLObjectType( {
    name: TypeName.Author,
    fields: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLNonNull(GraphQLString) }
    }
})