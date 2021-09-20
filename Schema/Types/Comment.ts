import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import ScoreEnum from "../enums/ScoreEnum";
import Author from "./Author";
import {TypeName} from "../../constants/GraphQL/TypeName";


export default new GraphQLObjectType( {
    name: TypeName.Comment,
    fields: {
        id: { type: GraphQLNonNull(GraphQLID) },
        text: { type: GraphQLString },
        score: { type: ScoreEnum },
        author: { type: GraphQLNonNull(Author) }
    }
})