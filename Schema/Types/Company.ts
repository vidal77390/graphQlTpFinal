import {GraphQLID, GraphQLObjectType, GraphQLString} from "graphql";


export default new GraphQLObjectType( {
    name: 'Company',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        shopLink: { type: GraphQLString }
    }
})