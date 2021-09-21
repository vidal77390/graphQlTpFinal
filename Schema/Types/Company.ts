import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import {TypeName} from "../../Constants/GraphQL/TypeName";


export default new GraphQLObjectType( {
    name: TypeName.Company,
    fields: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLNonNull(GraphQLString) },
        shopLink: { type: GraphQLString }
    }
})