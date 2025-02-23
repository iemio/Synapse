import * as React from "react";
import { useDrag } from "react-dnd";
import { cn } from "@/lib/utils";
import KanbanActions from "./kanban-actions";

interface KanbanTaskProps {
    task: {
        id: string;
        title: string;
        status: string;
        priority: string;
        project: string;
    };
}

const KanbanTask = React.forwardRef<HTMLDivElement, KanbanTaskProps>(
    ({ task }, ref) => {
        const [{ isDragging }, drag] = useDrag({
            type: "TASK",
            item: { id: task.id },
            collect: (monitor) => ({
                isDragging: !!monitor.isDragging(),
            }),
        });

        return (
            <div
                ref={drag}
                className={cn(
                    "p-2 bg-white shadow-md rounded-md mb-2",
                    isDragging && "opacity-50"
                )}
            >
                <div className="flex justify-between">
                    <p className="font-medium">{task.title}</p>
                    <KanbanActions taskId={task.id} />
                </div>
                <p className="text-sm text-gray-500">
                    Priority: {task.priority} | Project: {task.project}
                </p>
            </div>
        );
    }
);
KanbanTask.displayName = "KanbanTask";

export default KanbanTask;
