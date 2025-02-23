import * as React from "react";

interface KanbanActionsProps {
    taskId: string;
}

const KanbanActions = React.forwardRef<HTMLDivElement, KanbanActionsProps>(
    ({ taskId }, ref) => {
        const handleEdit = () => {
            alert(`Editing task: ${taskId}`);
        };

        const handleDelete = () => {
            alert(`Deleting task: ${taskId}`);
        };

        return (
            <div className="flex gap-2">
                <button onClick={handleEdit} className="text-blue-500">
                    Edit
                </button>
                <button onClick={handleDelete} className="text-red-500">
                    Delete
                </button>
            </div>
        );
    }
);
KanbanActions.displayName = "KanbanActions";

export default KanbanActions;
