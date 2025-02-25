export const isAuthRoute = (pathname: string): boolean => {
    return Object.values(AUTH_ROUTES).includes(pathname);
};

export const AUTH_ROUTES = {
    SIGN_IN: "/",
    SIGN_UP: "/sign-up",
    GOOGLE_OAUTH_CALLBACK: "/google/callback",
};

export const PROTECTED_ROUTES = {
    WORKSPACE: "/workspace/:workspaceId",
    TASKS: "/workspace/:workspaceId/tasks/",
    USER_TASKS: "/workspace/:workspaceId/tasks/:userId",
    MEMBERS: "/workspace/:workspaceId/members",
    SETTINGS: "/workspace/:workspaceId/settings",
    PROJECT_DETAILS: "/workspace/:workspaceId/project/:projectId",
};

export const BASE_ROUTE = {
    INVITE_URL: "/invite/workspace/:inviteCode/join",
};

export const PERSONAL_ROUTES = {
    PROFILE: "/user/:userId",
    PERSONAL_SETTINGS: "/user/:userId/settings",
};
