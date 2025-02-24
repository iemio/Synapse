import React from "react";
import Board from "./Board";

export const CustomKanban: React.FC = () => {
    return (
        <div className="h-[80vh] w-full bg-neutral-900 text-neutral-50">
            <Board />
        </div>
    );
};

export default CustomKanban;
