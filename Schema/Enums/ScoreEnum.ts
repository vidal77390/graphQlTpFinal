import {GraphQLEnumType} from "graphql";


export default new GraphQLEnumType({
    name: 'ScoreEnum',
    description: 'Available Score for Comment\n',
    values: {
        VERY_BAD: {
            value: 'VERY_BAD'
        },
        BAD: {
            value: 'BAD'
        },
        GOOD: {
            value: 'GOOD'
        },
        VERY_GOOD: {
            value: 'VERY_GOOD'
        },
        AWESOME: {
            value: 'BAD'
        }
    }
});