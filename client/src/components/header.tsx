import { SidebarTrigger } from "@/components/ui/sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "./ui/separator";
import { Link, useLocation } from "react-router-dom";
import useWorkspaceId from "@/hooks/use-workspace-id";
import LogoutDialog from "./asidebar/logout-dialog";
import { SidebarMenuButton, SidebarFooter } from "@/components/ui/sidebar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { EllipsisIcon, Loader, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useAuthContext } from "@/context/auth-provider";
import { useState } from "react";
const Header = () => {
    const location = useLocation();
    const workspaceId = useWorkspaceId();

    const pathname = location.pathname;

    const { isLoading, user } = useAuthContext();

    const [isOpen, setIsOpen] = useState(false);

    const getPageLabel = (pathname: string) => {
        if (pathname.includes("/project/")) return "Project";
        if (pathname.includes("/settings")) return "Settings";
        if (pathname.includes("/tasks")) return "Tasks";
        if (pathname.includes("/members")) return "Members";
        return null; // Default label
    };

    const pageHeading = getPageLabel(pathname);
    //   return (
    //     <header className="flex sticky top-0 z-50 bg-white h-12 shrink-0 items-center border-b">
    //       <div className="flex flex-1 items-center gap-2 px-3">
    //         <SidebarTrigger />
    //         <Separator orientation="vertical" className="mr-2 h-4" />
    //         <Breadcrumb>
    //           <BreadcrumbList>
    //             <BreadcrumbItem className="hidden md:block text-[15px]">
    //               {pageHeading ? (
    //                 <BreadcrumbLink asChild>
    //                   <Link to={`/workspace/${workspaceId}`}>Dashboard</Link>
    //                 </BreadcrumbLink>
    //               ) : (
    //                 <BreadcrumbPage className="line-clamp-1 ">
    //                   Dashboard
    //                 </BreadcrumbPage>
    //               )}
    //             </BreadcrumbItem>

    //             {pageHeading && (
    //               <>
    //                 <BreadcrumbSeparator className="hidden md:block" />
    //                 <BreadcrumbItem className="text-[15px]">
    //                   <BreadcrumbPage className="line-clamp-1">
    //                     {pageHeading}
    //                   </BreadcrumbPage>
    //                 </BreadcrumbItem>
    //               </>
    //             )}
    //           </BreadcrumbList>
    //         </Breadcrumb>
    //       </div>
    //     </header>
    //   );
    // };

    // export default Header;

    return (
        <>
            <header className="flex sticky top-0 z-50 bg-white h-12 shrink-0 items-center border-b">
                <div className="flex flex-1 items-center gap-2 px-3">
                    <SidebarTrigger />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block text-[15px]">
                                {pageHeading ? (
                                    <BreadcrumbLink asChild>
                                        <Link to={`/workspace/${workspaceId}`}>
                                            Dashboard
                                        </Link>
                                    </BreadcrumbLink>
                                ) : (
                                    <BreadcrumbPage className="line-clamp-1">
                                        Dashboard
                                    </BreadcrumbPage>
                                )}
                            </BreadcrumbItem>
                            {pageHeading && (
                                <>
                                    <BreadcrumbSeparator className="hidden md:block" />
                                    <BreadcrumbItem className="text-[15px]">
                                        <BreadcrumbPage className="line-clamp-1">
                                            {pageHeading}
                                        </BreadcrumbPage>
                                    </BreadcrumbItem>
                                </>
                            )}
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                {/* Right side of header: Render the user menu */}
                <div className="flex items-center pr-3">
                    <SidebarFooter
                        // Override the default vertical layout with horizontal alignment.
                        className="flex items-center gap-1 p-0 dark:bg-background"
                    >
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size="lg"
                                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                >
                                    <Avatar className="h-8 w-8 rounded-full">
                                        <AvatarImage
                                            src={user?.profilePicture || ""}
                                        />
                                        <AvatarFallback className="rounded-full border border-gray-500">
                                            {user?.name
                                                ?.split(" ")?.[0]
                                                ?.charAt(0)}
                                            {user?.name
                                                ?.split(" ")?.[1]
                                                ?.charAt(0)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <EllipsisIcon className="ml-auto size-4" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                                side="bottom"
                                align="start"
                                sideOffset={4}
                            >
                                <DropdownMenuGroup />
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">
                                        {user?.name}
                                    </span>
                                    <span className="truncate text-xs">
                                        {user?.email}
                                    </span>
                                </div>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    onClick={() => setIsOpen(true)}
                                >
                                    <LogOut />
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarFooter>
                </div>
            </header>
            <LogoutDialog isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};

export default Header;
