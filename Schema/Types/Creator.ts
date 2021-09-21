import {GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import BrainTeaser from "../Interface/BrainTeaser";
import {TypeName} from "../../Constants/GraphQL/TypeName";


export default new GraphQLObjectType( {
    name: TypeName.Creator,
    fields: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLNonNull(GraphQLString) },
        listOfCreation: { type: GraphQLList(BrainTeaser) }
    }
})
