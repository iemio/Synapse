"use client";

import {
    LucideIcon,
    Settings,
    Users,
    CheckCircle,
    LayoutDashboard,
    PackageCheck,
    SquareCheckBig,
} from "lucide-react";
import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";
import useWorkspaceId from "@/hooks/use-workspace-id";
import { useAuthContext } from "@/context/auth-provider";
import { Permissions } from "@/constant";
import useUserId from "@/hooks/api/use-user-id";

type ItemType = {
    title: string;
    url: string;
    icon: LucideIcon;
};

export function NavMain() {
    const { hasPermission } = useAuthContext();

    const canManageSettings = hasPermission(
        Permissions.MANAGE_WORKSPACE_SETTINGS
    );

    const workspaceId = useWorkspaceId();
    const userId = useUserId();
    const location = useLocation();

    const pathname = location.pathname;

    const items: ItemType[] = [
        {
            title: "Dashboard",
            url: `/workspace/${workspaceId}`,
            icon: LayoutDashboard,
        },
        {
            title: "My Tasks",
            url: `/workspace/${workspaceId}/tasks/${userId}`,
            icon: SquareCheckBig,
        },
        {
            title: "All Tasks",
            url: `/workspace/${workspaceId}/tasks`,
            icon: PackageCheck,
        },
        {
            title: "Members",
            url: `/workspace/${workspaceId}/members`,
            icon: Users,
        },

        ...(canManageSettings
            ? [
                  {
                      title: "Settings",
                      url: `/workspace/${workspaceId}/settings`,
                      icon: Settings,
                  },
              ]
            : []),
    ];
    return (
        <SidebarGroup>
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                            isActive={item.url === pathname}
                            asChild
                        >
                            <Link to={item.url} className="!text-[15px]">
                                <item.icon />
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
