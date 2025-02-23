import * as React from "react";
import { useDrop } from "react-dnd";
import { cn } from "@/lib/utils";
import KanbanTask from "./kanban-task";

interface KanbanColumnProps {
    title: string;
    status: string;
    tasks: {
        id: string;
        title: string;
        status: string;
        priority: string;
        project: string;
    }[];
    moveTask: (taskId: string, newStatus: string) => void;
}

const KanbanColumn = React.forwardRef<HTMLDivElement, KanbanColumnProps>(
    ({ title, status, tasks, moveTask }, ref) => {
        const [{ isOver }, drop] = useDrop({
            accept: "TASK",
            drop: (item: { id: string }) => moveTask(item.id, status),
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
            }),
        });

        return (
            <div
                ref={drop}
                className={cn(
                    "p-4 rounded-lg bg-gray-100 min-h-[400px]",
                    isOver && "bg-gray-200"
                )}
            >
                <h2 className="text-lg font-semibold">{title}</h2>
                {tasks
                    .filter((task) => task.status === status)
                    .map((task) => (
                        <KanbanTask key={task.id} task={task} />
                    ))}
            </div>
        );
    }
);
KanbanColumn.displayName = "KanbanColumn";

export default KanbanColumn;
