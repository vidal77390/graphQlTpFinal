import {GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import {TypeName} from "../../constants/GraphQL/TypeName";
import BrainTeaser, {brainTeaserFields} from "../interface/BrainTeaser";


export default new GraphQLObjectType( {
    name: TypeName.Puzzle,
    interfaces: [BrainTeaser],
    fields: {
        ...brainTeaserFields,
        pieceNumber: {
            type: new GraphQLNonNull(GraphQLInt),
            resolve: (obj) => {
                return obj.piece_number
            } 
        }
    }
})