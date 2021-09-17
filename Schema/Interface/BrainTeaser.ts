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

export const resolveType = (obj: { numberFacet?: string; numberPiece?: string }) => {
    if (obj.numberFacet) {
        return TypeName.RubiksCube;
    }else return TypeName.Puzzle;
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
    name: TypeName.BrainTeaser,
    resolveType,
    fields: () => brainTeaserFields
});