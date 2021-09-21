import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import ScoreEnum from "../Enums/ScoreEnum";
import User from "./User";
import {TypeName} from "../../Constants/GraphQL/TypeName";


export default new GraphQLObjectType( {
    name: TypeName.Comment,
    fields: {
        id: { type: GraphQLID },
        text: { type: GraphQLString },
        score: { type: ScoreEnum },
        author: { type: GraphQLNonNull(User) }
    }
})