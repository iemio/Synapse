import React, { useState, forwardRef } from "react";
import { Button } from "./button";
import { Input } from "./input";

interface SkillsInputProps extends React.ComponentProps<"input"> {
    skills: string[];
    onAdd: (skill: string) => void;
    onRemove: (skill: string) => void;
}

const SkillsInput = forwardRef<HTMLInputElement, SkillsInputProps>(
    ({ skills, onAdd, onRemove, className, ...props }, ref) => {
        const [inputValue, setInputValue] = useState("");

        const handleAddSkill = () => {
            if (inputValue.trim() && !skills.includes(inputValue.trim())) {
                onAdd(inputValue.trim());
                setInputValue(""); // Clear input after adding
            }
        };

        const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
                e.preventDefault();
                handleAddSkill();
            }
        };

        return (
            <div className="w-full">
                {/* Input Field */}
                <div className="flex items-center gap-2">
                    <Input
                        ref={ref}
                        type="text"
                        placeholder="Add a skill and press Enter"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className={`flex-1 px-3 !h-[48px] border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 ${className}`}
                        {...props}
                    />
                    <Button
                        type="button"
                        onClick={handleAddSkill}
                        className="!h-[48px]  text-white font-semibold"
                    >
                        Add
                    </Button>
                </div>

                {/* Skills List */}
                <div className="mt-3 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <span
                            key={skill}
                            className="flex items-center gap-2 px-3 py-1 bg-gray-200 text-sm rounded-md"
                        >
                            {skill}
                            <button
                                type="button"
                                onClick={() => onRemove(skill)}
                                className="text-red-500 hover:text-red-700"
                            >
                                ✖
                            </button>
                        </span>
                    ))}
                </div>
            </div>
        );
    }
);

export default SkillsInput;
