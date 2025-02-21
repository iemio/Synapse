// import { SidebarTrigger } from "@/components/ui/sidebar";
// import {
//     Breadcrumb,
//     BreadcrumbItem,
//     BreadcrumbLink,
//     BreadcrumbList,
//     BreadcrumbPage,
//     BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { Separator } from "./ui/separator";
// import { Link, useLocation } from "react-router-dom";
// import useWorkspaceId from "@/hooks/use-workspace-id";
// import LogoutDialog from "./asidebar/logout-dialog";
// import { SidebarMenuButton, SidebarFooter } from "@/components/ui/sidebar";
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuGroup,
//     DropdownMenuItem,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// import { EllipsisIcon, Loader, LogOut } from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// import { useAuthContext } from "@/context/auth-provider";
// import { useState } from "react";
// import Profile from "@/page/personal/Profile";
// const Header = () => {
//     const location = useLocation();
//     const workspaceId = useWorkspaceId();

//     const pathname = location.pathname;

//     const { isLoading, user } = useAuthContext();

//     const [isOpen, setIsOpen] = useState(false);

//     const getPageLabel = (pathname: string) => {
//         if (pathname.includes("/project/")) return "Project";
//         if (pathname.includes("/settings")) return "Settings";
//         if (pathname.includes("/tasks")) return "Tasks";
//         if (pathname.includes("/members")) return "Members";
//         return null; // Default label
//     };

//     const pageHeading = getPageLabel(pathname);
//     //   return (
//     //     <header className="flex sticky top-0 z-50 bg-white h-12 shrink-0 items-center border-b">
//     //       <div className="flex flex-1 items-center gap-2 px-3">
//     //         <SidebarTrigger />
//     //         <Separator orientation="vertical" className="mr-2 h-4" />
//     //         <Breadcrumb>
//     //           <BreadcrumbList>
//     //             <BreadcrumbItem className="hidden md:block text-[15px]">
//     //               {pageHeading ? (
//     //                 <BreadcrumbLink asChild>
//     //                   <Link to={`/workspace/${workspaceId}`}>Dashboard</Link>
//     //                 </BreadcrumbLink>
//     //               ) : (
//     //                 <BreadcrumbPage className="line-clamp-1 ">
//     //                   Dashboard
//     //                 </BreadcrumbPage>
//     //               )}
//     //             </BreadcrumbItem>

//     //             {pageHeading && (
//     //               <>
//     //                 <BreadcrumbSeparator className="hidden md:block" />
//     //                 <BreadcrumbItem className="text-[15px]">
//     //                   <BreadcrumbPage className="line-clamp-1">
//     //                     {pageHeading}
//     //                   </BreadcrumbPage>
//     //                 </BreadcrumbItem>
//     //               </>
//     //             )}
//     //           </BreadcrumbList>
//     //         </Breadcrumb>
//     //       </div>
//     //     </header>
//     //   );
//     // };

//     // export default Header;

//     return (
//         <>
//             <header className="flex sticky top-0 z-50 bg-white h-12 shrink-0 items-center border-b">
//                 <div className="flex flex-1 items-center gap-2 px-3">
//                     <SidebarTrigger />
//                     <Separator orientation="vertical" className="mr-2 h-4" />
//                     <Breadcrumb>
//                         <BreadcrumbList>
//                             <BreadcrumbItem className="hidden md:block text-[15px]">
//                                 {pageHeading ? (
//                                     <BreadcrumbLink asChild>
//                                         <Link to={`/workspace/${workspaceId}`}>
//                                             Dashboard
//                                         </Link>
//                                     </BreadcrumbLink>
//                                 ) : (
//                                     <BreadcrumbPage className="line-clamp-1">
//                                         Dashboard
//                                     </BreadcrumbPage>
//                                 )}
//                             </BreadcrumbItem>
//                             {pageHeading && (
//                                 <>
//                                     <BreadcrumbSeparator className="hidden md:block" />
//                                     <BreadcrumbItem className="text-[15px]">
//                                         <BreadcrumbPage className="line-clamp-1">
//                                             {pageHeading}
//                                         </BreadcrumbPage>
//                                     </BreadcrumbItem>
//                                 </>
//                             )}
//                         </BreadcrumbList>
//                     </Breadcrumb>
//                 </div>
//                 {/* Right side of header: Render the user menu */}
//                 <div className="flex items-center pr-3">
//                     <SidebarFooter
//                         // Override the default vertical layout with horizontal alignment.
//                         className="flex items-center gap-1 p-0 dark:bg-background"
//                     >
//                         <DropdownMenu>
//                             <DropdownMenuTrigger asChild>
//                                 <SidebarMenuButton
//                                     size="lg"
//                                     className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
//                                 >
//                                     <Avatar className="h-8 w-8 rounded-full">
//                                         <AvatarImage
//                                             src={user?.profilePicture || ""}
//                                         />
//                                         <AvatarFallback className="rounded-full border border-gray-500">
//                                             {user?.name
//                                                 ?.split(" ")?.[0]
//                                                 ?.charAt(0)}
//                                             {user?.name
//                                                 ?.split(" ")?.[1]
//                                                 ?.charAt(0)}
//                                         </AvatarFallback>
//                                     </Avatar>
//                                     <EllipsisIcon className="ml-auto size-4" />
//                                 </SidebarMenuButton>
//                             </DropdownMenuTrigger>
//                             <DropdownMenuContent
//                                 className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
//                                 side="bottom"
//                                 align="start"
//                                 sideOffset={4}
//                             >
//                                 <div className="grid flex-1 text-left text-sm leading-tight">
//                                     <span className="truncate font-semibold">
//                                         {user?.name}
//                                     </span>
//                                     <span className="truncate text-xs">
//                                         {user?.email}
//                                     </span>
//                                 </div>
//                                 <DropdownMenuGroup />
//                                 <DropdownMenuSeparator />
//                                 <DropdownMenuItem
//                                     onClick={() => setIsOpen(true)}
//                                 >
//                                     <LogOut />
//                                     Log out
//                                 </DropdownMenuItem>
//                                 <DropdownMenuItem>Profile</DropdownMenuItem>
//                             </DropdownMenuContent>
//                         </DropdownMenu>
//                     </SidebarFooter>
//                 </div>
//             </header>
//             <LogoutDialog isOpen={isOpen} setIsOpen={setIsOpen} />
//         </>
//     );
// };

// export default Header;

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
import {
    CircleArrowLeft,
    EllipsisIcon,
    LayoutDashboard,
    LogOut,
    SquareArrowOutUpRight,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthContext } from "@/context/auth-provider";
import { useState } from "react";

import { LucideIcon, Settings2, UserPen } from "lucide-react";
import useAuth from "@/hooks/api/use-auth";
import Logo from "./logo";

type ItemType = {
    title: string;
    url: string;
    icon: LucideIcon;
};

const Header = () => {
    const location = useLocation();
    const workspaceId = useWorkspaceId();
    const pathname = location.pathname;
    const { user } = useAuthContext();
    const [isOpen, setIsOpen] = useState(false);

    // Determine a page label for workspace routes.
    const getPageLabel = (pathname: string) => {
        if (pathname.includes("/project/")) return "Project";
        if (pathname.includes("/settings")) return "Settings";
        if (pathname.includes("/tasks")) return "Tasks";
        if (pathname.includes("/members")) return "Members";
        if (pathname.includes("/profile")) return "Profile";
        return null;
    };

    const pageHeading = getPageLabel(pathname);

    // Decide if this is a workspace route.
    const isWorkspaceRoute = pathname.includes("/workspace/");
    const isUserRoute = pathname.includes("/user/");
    // Alternatively, if personal routes start with "/user", you can use:
    // const isUserRoute = pathname.startsWith("/user");

    const items: ItemType[] = [
        {
            title: "Profile",
            url: `/user/${user?._id}`,
            icon: UserPen,
        },
        {
            title: "Settings",
            url: `/user/${user?._id}/settings`,
            icon: Settings2,
        },
    ];

    return (
        <>
            <header className="flex sticky top-0 z-50 bg-white h-12 shrink-0 items-center border-b dark:bg-gray-900 dark:border-gray-700">
                {/* Only render the left side if it's a workspace route */}
                {isWorkspaceRoute && (
                    <div className="flex flex-1 items-center gap-2 px-3">
                        <SidebarTrigger />
                        <Separator
                            orientation="vertical"
                            className="mr-2 h-4"
                        />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block text-[15px]">
                                    {pageHeading ? (
                                        <BreadcrumbLink asChild>
                                            <Link
                                                to={`/workspace/${workspaceId}`}
                                            >
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
                )}

                {isUserRoute && (
                    <div className="flex flex-1 items-center gap-2 px-3">
                        <Separator
                            orientation="vertical"
                            className="mr-2 h-4"
                        />
                        <Link to={`/`}>
                            <LayoutDashboard />
                        </Link>
                        <Separator
                            orientation="vertical"
                            className="mr-2 h-4"
                        />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block text-[15px]">
                                    {pageHeading ? (
                                        <BreadcrumbLink asChild>
                                            <Link to={`/user/${user?._id}`}>
                                                Personal
                                            </Link>
                                        </BreadcrumbLink>
                                    ) : (
                                        <BreadcrumbPage className="line-clamp-1">
                                            Personal
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
                )}

                {/* Always render the user menu on the right */}
                <div className="flex items-center pr-3">
                    <div className="flex items-center gap-1 p-0 dark:bg-background">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
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
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                                side="bottom"
                                align="start"
                                sideOffset={4}
                            >
                                <div className="flex flex-col items-center text-center p-4">
                                    <Avatar className="w-12 h-12 mb-2">
                                        <AvatarImage
                                            src={
                                                user?.profilePicture ||
                                                "/default-avatar.png"
                                            }
                                            alt="User Avatar"
                                        />
                                        <AvatarFallback>
                                            {user?.name
                                                ?.charAt(0)
                                                .toUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>
                                    <span className="truncate font-semibold">
                                        {user?.name}
                                    </span>
                                    <span className="truncate text-xs text-muted-foreground">
                                        {user?.email}
                                    </span>
                                    {/* Manage Account Button */}
                                    <DropdownMenuItem
                                        asChild
                                        key={"Manage Account"}
                                    >
                                        <Link
                                            to="/account"
                                            className="flex items-center gap-2 px-2 py-1.5 text-sm text-inherit w-full cursor-pointer"
                                        >
                                            Manage your account
                                            <SquareArrowOutUpRight />
                                        </Link>
                                    </DropdownMenuItem>
                                </div>
                                <DropdownMenuGroup />
                                <DropdownMenuSeparator />
                                {items.map((item) => (
                                    <DropdownMenuItem asChild key={item.title}>
                                        <Link
                                            to={item.url}
                                            className="flex items-center gap-2 px-2 py-1.5 text-sm text-inherit w-full cursor-pointer"
                                        >
                                            <item.icon />
                                            {item.title}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    onClick={() => setIsOpen(true)}
                                >
                                    <LogOut />
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </header>
            <LogoutDialog isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};

export default Header;
