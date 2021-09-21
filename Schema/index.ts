import { GraphQLSchema } from 'graphql';
import queryType from './Types/Query';
import UserType from './Types/User';
import CommentType from './Types/Comment';
import CompanyType from './Types/Company';
import CreatorType from './Types/Creator';
import PuzzleType from './Types/Puzzle';
import RubiksCubeType from './Types/RubiksCube';
import Mutation from './Types/Mutation'

export default new GraphQLSchema({
    query: queryType,
    mutation: Mutation,
    types: [UserType, CommentType, CompanyType, CreatorType, PuzzleType, RubiksCubeType]
});


