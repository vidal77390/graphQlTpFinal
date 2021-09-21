import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import ScoreEnum from "../enums/ScoreEnum";
import User from "./User";
import {TypeName} from "../../constants/GraphQL/TypeName";


export default new GraphQLObjectType( {
    name: TypeName.Comment,
    fields: {
        id: { type: GraphQLID },
        text: { type: GraphQLString },
        score: { type: ScoreEnum },
        author: { type: GraphQLNonNull(User) }
    }
})