import {GraphQLID, GraphQLObjectType, GraphQLString} from "graphql";


export default new GraphQLObjectType( {
    name: 'Author',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString }
    }
})