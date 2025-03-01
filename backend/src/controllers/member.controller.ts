import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.middleware";
import { z } from "zod";
import { HTTPSTATUS } from "../config/http.config";
import {
    getMemberRoleInWorkspace,
    joinWorkspaceByInviteService,
    removeMemberService,
} from "../services/member.service";
import { roleGuard } from "../utils/roleGuard";
import { Permissions } from "../enums/role.enum";
import { workspaceIdSchema } from "../validation/workspace.validation";
import { userIdSchema } from "../validation/user.validation";

export const joinWorkspaceController = asyncHandler(
    async (req: Request, res: Response) => {
        const inviteCode = z.string().parse(req.params.inviteCode);
        const userId = req.user?._id;

        const { workspaceId, role } = await joinWorkspaceByInviteService(
            userId,
            inviteCode
        );

        return res.status(HTTPSTATUS.OK).json({
            message: "Successfully joined the workspace",
            workspaceId,
            role,
        });
    }
);

export const deleteMemberController = asyncHandler(
    async (req: Request, res: Response) => {
        const userId = req.user?._id;

        const memberId = userIdSchema.parse(req.params.id);
        const workspaceId = workspaceIdSchema.parse(req.params.workspaceId);

        const { role } = await getMemberRoleInWorkspace(userId, workspaceId);
        roleGuard(role, [Permissions.REMOVE_MEMBER]);

        await removeMemberService(workspaceId, memberId);

        return res.status(HTTPSTATUS.OK).json({
            message: "Member removed successfully",
        });
    }
);
