import {GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString} from "graphql";
import DifficultyEnum from "../Enums/DifficultyEnum";
import MaterialEnum from "../Enums/MaterialEnum";
import Company from "./Company";
import Comment from "./Comment";


export default new GraphQLObjectType({
    name: "BrainTeaser",
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        shopLink: { type: GraphQLString },
        difficulty: { type: DifficultyEnum },
        material: { type: MaterialEnum },
        fasterSolving: { type: GraphQLInt },
        producer: { type: Company },
        listOfComment: { type: GraphQLList(Comment) }
    }
})