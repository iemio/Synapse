import useTaskKanbanFilter from "@/hooks/use-task-kanban-filter";
import useTaskTableFilter from "@/hooks/use-task-table-filter";
import react from "react";

type Filters = ReturnType<typeof useTaskTableFilter>[0];
type SetFilters = ReturnType<typeof useTaskTableFilter>[1];

interface DataTableFilterToolbarProps {
    isLoading?: boolean;
    projectId?: string;
    filters: Filters;
    setFilters: SetFilters;
}

const TaskKanban = () => {
    return <div>hello</div>;
};

export default TaskKanban;
