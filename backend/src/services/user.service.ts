import UserModel from "../models/user.model";
import { BadRequestException, NotFoundException } from "../utils/appError";

export const getCurrentUserService = async (userId: string) => {
    const user = await UserModel.findById(userId)
        .populate("currentWorkspace")
        .select("-password");

    if (!user) {
        throw new BadRequestException("User not found");
    }

    return {
        user,
    };
};

//********************************
// UPDATE USER
//**************** **************/
export const updateUserByIdService = async (
    userId: string,
    name: string,
    skills?: string[]
) => {
    const user = await UserModel.findById(userId);
    if (!user) {
        throw new NotFoundException("Workspace not found");
    }

    user.name = name || user.name;
    user.skills = skills ?? user.skills; //Instead of ||, use ?? (nullish coalescing) to ensure an empty array ([]) is accepted
    await user.save();

    return {
        user,
    };
};
