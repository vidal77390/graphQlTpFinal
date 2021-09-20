import {
    GraphQLID,
    GraphQLInterfaceType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLList,
    GraphQLFieldConfigMap, GraphQLBoolean
} from "graphql";
import DifficultyEnum from "../enums/DifficultyEnum";
import MaterialEnum from "../enums/MaterialEnum";
import Company from "../types/Company";
import Comment from "../types/Comment";
import {TypeName} from "../../constants/GraphQL/TypeName";
import { TableName } from "../../constants/Database/TableName";

export const resolveType = (obj: { facet_number?: string; piece_number?: string; }) => {
    console.log(obj)

    if (obj.facet_number) {
        return TypeName.RubiksCube;
    } else if (obj.piece_number){
        return TypeName.Puzzle;
    }
};

export const brainTeaserFields: GraphQLFieldConfigMap<
    any,
    any
    > = {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    shopLink: { type: GraphQLString },
    difficulty: { type: new GraphQLNonNull(DifficultyEnum) },
    material: { type: new GraphQLNonNull(MaterialEnum) },
    fasterSolving: { type: GraphQLInt },
    producer: { type: new GraphQLNonNull(Company) },
    listOfComment: { type: GraphQLList(Comment) }
};

export default new GraphQLInterfaceType({
    name: "BrainTeaser",
    resolveType,
    fields: () => brainTeaserFields
});