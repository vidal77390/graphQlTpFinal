import {GraphQLID, GraphQLObjectType, GraphQLString} from "graphql";
import ScoreEnum from "../Enums/ScoreEnum";
import Author from "./Author";


export default new GraphQLObjectType( {
    name: 'Comment',
    fields: {
        id: { type: GraphQLID },
        text: { type: GraphQLString },
        score: { type: ScoreEnum },
        author: { type: Author }
    }
})