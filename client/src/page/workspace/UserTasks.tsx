import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RecentMembers from "@/components/workspace/member/recent-members";
import RecentProjects from "@/components/workspace/project/recent-projects";
import { CustomKanban } from "@/components/workspace/task/kanban-try-3/Custom-kanban";
import { Calendar, Kanban, TableOfContents } from "lucide-react";

const UserTasks = () => {
    return (
        <div className="mt-4">
            <Tabs defaultValue="table" className="w-full border rounded-lg p-2">
                <TabsList className="w-full justify-start border-0 bg-gray-50 px-1 h-12">
                    <TabsTrigger className="py-2" value="table">
                        <TableOfContents className="h-4 w-4" />
                        Table
                    </TabsTrigger>
                    <TabsTrigger className="py-2" value="kanban">
                        <Kanban className="h-4 w-4" />
                        Kanban
                    </TabsTrigger>
                    <TabsTrigger className="py-2" value="calendar">
                        <Calendar className="h-4 w-4" />
                        Calendar
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="table">
                    <RecentProjects />
                </TabsContent>
                <TabsContent value="kanban">
                    <CustomKanban />
                    {/* <CustomKanban /> */}
                </TabsContent>
                <TabsContent value="calendar">
                    <RecentMembers />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default UserTasks;
