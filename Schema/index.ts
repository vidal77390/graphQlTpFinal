import { GraphQLSchema } from 'graphql';
import queryType from './types/Query';
import AuthorType from './types/Author';
import CommentType from './types/Comment';
import CompanyType from './types/Company';
import CreatorType from './types/Creator';
import PuzzleType from './types/Puzzle';
import RubiksCubeType from './types/RubiksCube';

export default new GraphQLSchema({
    query: queryType,
    types: [AuthorType, CommentType, CompanyType, CreatorType, PuzzleType, RubiksCubeType]
});


