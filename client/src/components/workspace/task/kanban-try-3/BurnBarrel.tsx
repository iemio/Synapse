import React, { useState } from "react";
import { Trash, Flame } from "lucide-react";
import { ICard } from "./types";

interface BurnBarrelProps {
    setCards: React.Dispatch<React.SetStateAction<ICard[]>>;
}

const BurnBarrel: React.FC<BurnBarrelProps> = ({ setCards }) => {
    const [active, setActive] = useState<boolean>(false);

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        setActive(true);
    };

    const handleDragLeave = (): void => {
        setActive(false);
    };

    const handleDragEnd = (e: React.DragEvent<HTMLDivElement>): void => {
        const cardId = e.dataTransfer.getData("cardId");

        setCards((pv) => pv.filter((c) => c.id !== cardId));

        setActive(false);
    };

    return (
        <div
            onDrop={handleDragEnd}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
                active
                    ? "border-red-800 bg-red-800/20 text-red-500"
                    : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
            }`}
        >
            {active ? <Flame className="animate-bounce" /> : <Trash />}
        </div>
    );
};

export default BurnBarrel;
