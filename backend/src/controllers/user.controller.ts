import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.middleware";
import { HTTPSTATUS } from "../config/http.config";
import {
    getCurrentUserService,
    updateUserByIdService,
} from "../services/user.service";
import { updateUserSchema, userIdSchema } from "../validation/user.validation";

export const getCurrentUserController = asyncHandler(
    async (req: Request, res: Response) => {
        const userId = req.user?._id;

        const { user } = await getCurrentUserService(userId);

        return res.status(HTTPSTATUS.OK).json({
            message: "User fetch successfully",
            user,
        });
    }
);

export const updateUserByIdController = asyncHandler(
    async (req: Request, res: Response) => {
        const userId = userIdSchema.parse(req.params.id);
        const { name, skills } = updateUserSchema.parse(req.body);

        const { user } = await updateUserByIdService(userId, name, skills);

        return res.status(HTTPSTATUS.OK).json({
            message: "User updated successfully",
            user,
        });
    }
);
