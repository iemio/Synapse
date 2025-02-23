import * as React from "react";

interface KanbanFiltersProps {
    onFilter: (filters: { priority?: string; project?: string }) => void;
}

const KanbanFilters = React.forwardRef<HTMLDivElement, KanbanFiltersProps>(
    ({ onFilter }, ref) => {
        const [priority, setPriority] = React.useState("");
        const [project, setProject] = React.useState("");

        const handleFilterChange = () => {
            onFilter({ priority, project });
        };

        return (
            <div className="flex gap-4 p-4">
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="p-2 border rounded"
                >
                    <option value="">All Priorities</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <select
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    className="p-2 border rounded"
                >
                    <option value="">All Projects</option>
                    <option value="Project A">Project A</option>
                    <option value="Project B">Project B</option>
                </select>
                <button
                    onClick={handleFilterChange}
                    className="p-2 bg-blue-500 text-white rounded"
                >
                    Filter
                </button>
            </div>
        );
    }
);
KanbanFilters.displayName = "KanbanFilters";

export default KanbanFilters;
