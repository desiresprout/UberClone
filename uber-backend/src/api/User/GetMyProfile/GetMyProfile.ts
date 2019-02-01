import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import { async } from "q";

const resolvers: Resolvers = {
  Query: {
    GetMyProfile: privateResolver(async (_, __, { req }) => {
      const { user } = req;
      return {
        ok: true,
        error: null,
        user
      };
    }),
    SayHello : async(_,_,_) =>{
        return {
            ok : true,
        }
    }
  }
};
export default resolvers;