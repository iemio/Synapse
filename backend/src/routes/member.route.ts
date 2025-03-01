import { Router } from "express";
import {
    deleteMemberController,
    joinWorkspaceController,
} from "../controllers/member.controller";

const memberRoutes = Router();

memberRoutes.post("/workspace/:inviteCode/join", joinWorkspaceController);

memberRoutes.delete(
    "/:id/workspace/:workspaceId/delete",
    deleteMemberController
);

export default memberRoutes;
