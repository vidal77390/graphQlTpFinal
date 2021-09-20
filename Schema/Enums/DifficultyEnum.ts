import {GraphQLEnumType} from "graphql";


export default new GraphQLEnumType({
    name: 'DifficultyEnum',
    description: 'All possible Material of BrainTeaser',
    values: {
        BEGGINNER: {
            value: 'BEGGINNER'
        },
        EASY: {
            value: 'EASY'
        },
        NORMAL: {
            value: 'NORMAL'
        },
        HARD: {
            value: 'HARD'
        },
        EXPERT: {
            value: 'EXPERT'
        }
    }
});