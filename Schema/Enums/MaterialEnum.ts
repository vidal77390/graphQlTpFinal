import {GraphQLEnumType} from "graphql";


export default new GraphQLEnumType({
    name: 'MaterialEnum',
    description: 'All possible Material of BrainTeaser',
    values: {
        WOOD: {
            value: 'WOOD'
        },
        METAL: {
            value: 'METAL'
        },
        PLASTIC: {
            value: 'PLASTIC'
        },
        GOLD: {
            value: 'GOLD'
        }
    }
});