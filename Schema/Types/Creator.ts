import {GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString} from "graphql";
import BrainTeaser from "./BrainTeaser";


export default new GraphQLObjectType( {
    name: 'Creator',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        listOfCreation: { type: GraphQLList(BrainTeaser) }
    }
})