import { GraphQLSchema } from 'graphql';
import queryType from './types/Query';
import UserType from './types/User';
import CommentType from './types/Comment';
import CompanyType from './types/Company';
import CreatorType from './types/Creator';
import PuzzleType from './types/Puzzle';
import RubiksCubeType from './types/RubiksCube';
import Mutation from './types/Mutation'

export default new GraphQLSchema({
    query: queryType,
    mutation: Mutation,
    types: [UserType, CommentType, CompanyType, CreatorType, PuzzleType, RubiksCubeType]
});


