import {GraphQLInt, GraphQLNonNull, GraphQLObjectType} from "graphql";
import {TypeName} from "../../Constants/GraphQL/TypeName";
import BrainTeaser, {brainTeaserFields} from "../Interface/BrainTeaser";


export default new GraphQLObjectType( {
    name: TypeName.Puzzle,
    interfaces: [BrainTeaser],
    fields: {
        ...brainTeaserFields,
        numberFacet: { type: new GraphQLNonNull(GraphQLInt) },
        numberAxe: { type: new GraphQLNonNull(GraphQLInt) }
    }
})