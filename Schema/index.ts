import {GraphQLSchema} from 'graphql';
import queryType from './Types/Query';

export default new GraphQLSchema({ query: queryType });


