import * as React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { cn } from "@/lib/utils";
import KanbanColumn from "./kanban-columns";
import KanbanFilters from "./kanban-filters";

const COLUMNS = {
    BACKLOG: "Backlog",
    TODO: "To Do",
    IN_PROGRESS: "In Progress",
    IN_REVIEW: "In Review",
    DONE: "Done",
};

const KanbanBoard = () => {
    const [tasks, setTasks] = React.useState([
        {
            id: "1",
            title: "Task 1",
            status: "TODO",
            priority: "High",
            project: "Project A",
        },
        {
            id: "2",
            title: "Task 2",
            status: "IN_PROGRESS",
            priority: "Low",
            project: "Project B",
        },
    ]);

    const moveTask = (taskId: string, newStatus: string) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === taskId ? { ...task, status: newStatus } : task
            )
        );
    };

    const filterTasks = (filters: { priority?: string; project?: string }) => {
        // Implement filtering logic based on selected filters
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <KanbanFilters onFilter={filterTasks} />
            <div className="grid grid-cols-5 gap-4 p-4">
                {Object.entries(COLUMNS).map(([key, label]) => (
                    <KanbanColumn
                        key={key}
                        title={label}
                        status={key}
                        tasks={tasks}
                        moveTask={moveTask}
                    />
                ))}
            </div>
        </DndProvider>
    );
};

export default KanbanBoard;
