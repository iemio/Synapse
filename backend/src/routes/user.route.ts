import { Router } from "express";
import {
    getCurrentUserController,
    updateUserByIdController,
} from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.get("/current", getCurrentUserController);

userRoutes.put("/update/:id", updateUserByIdController);

export default userRoutes;
