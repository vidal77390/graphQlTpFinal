import {
    GraphQLID,
    GraphQLInterfaceType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLList,
    GraphQLFieldConfigMap, GraphQLBoolean
} from "graphql";
import DifficultyEnum from "../Enums/DifficultyEnum";
import MaterialEnum from "../Enums/MaterialEnum";
import Company from "../Types/Company";
import Comment from "../Types/Comment";
import {TypeName} from "../../Constants/GraphQL/TypeName";
import { TableName } from "../../Constants/Database/TableName";

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