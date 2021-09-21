import {GraphQLInt, GraphQLNonNull, GraphQLObjectType} from "graphql";
import {TypeName} from "../../Constants/GraphQL/TypeName";
import BrainTeaser, {brainTeaserFields} from "../interface/BrainTeaser";


export default new GraphQLObjectType( {
    name: TypeName.RubiksCube,
    interfaces: [BrainTeaser],
    fields: {
        ...brainTeaserFields,
        facetNumber: {
            type: new GraphQLNonNull(GraphQLInt),
            resolve: (obj) => {
                return obj.facet_number
            }
        },
        axeNumber: {
            type: new GraphQLNonNull(GraphQLInt),
            resolve: (obj) => {
                return obj.axe_number
            }
        }
    }
})