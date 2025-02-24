import { TaskPriorityEnum, TaskPriorityEnumType } from "@/constant";
import { parseAsString, parseAsStringEnum, useQueryStates } from "nuqs";

const useTaskKanbanFilter = () => {
    return useQueryStates({
        priority: parseAsStringEnum<TaskPriorityEnumType>(
            Object.values(TaskPriorityEnum)
        ),
        keyword: parseAsString,
        projectId: parseAsString,
        assigneeId: parseAsString,
    });
};

export default useTaskKanbanFilter;
