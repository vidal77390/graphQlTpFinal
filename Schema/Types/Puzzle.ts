import {GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import {TypeName} from "../../Constants/GraphQL/TypeName";
import BrainTeaser, {brainTeaserFields} from "../Interface/BrainTeaser";


export default new GraphQLObjectType( {
    name: TypeName.Puzzle,
    interfaces: [BrainTeaser],
    fields: {
        ...brainTeaserFields,
        numberPiece: { type: new GraphQLNonNull(GraphQLInt) }
    }
})