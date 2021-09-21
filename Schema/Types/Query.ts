import {GraphQLID, GraphQLList, GraphQLObjectType} from "graphql";
import BrainTeaser from "../Interface/BrainTeaser";
import {findBrainTeaserById, getAllBrainTeaser} from "../../Database";


export default new GraphQLObjectType({
    name: "Query",
    fields: {

        brainTeaser: {
            type: BrainTeaser,
            description: "Return BrainTeaser associated to the ID",
            args: {
                id: {
                    type: GraphQLID,
                    description: 'The ID of a BrainTeaser'
                }
            },
            resolve: async (obj, args, context, info ) => {
                if(!args.id) return null;
                try {
                    const brainTeaser = await findBrainTeaserById(args.id);
                    if (!brainTeaser) return null;
                    else return brainTeaser;
                } catch { return null; }
            }
        },
        allBrainTeaser: {
            type: new GraphQLList(BrainTeaser),
            description: "Return all BrainTeaser of DB",
            resolve: async (obj, args, context, info) => {
                try {
                    return await getAllBrainTeaser();
                } catch { return null; }
            }
        }
    }
})
