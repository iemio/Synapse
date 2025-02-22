import { useTheme } from "@/context/theme-provider";
import { Sun, Moon, Monitor } from "lucide-react";

const themes = [
    { value: "light", label: "Light", icon: <Sun size={20} /> },
    { value: "dark", label: "Dark", icon: <Moon size={20} /> },
    { value: "system", label: "Match browser", icon: <Monitor size={20} /> },
];

export default function ThemeSelector() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex flex-col space-y-2 p-4">
            {themes.map(({ value, label, icon }) => (
                <label
                    key={value}
                    className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer ${
                        theme === value
                            ? "bg-gray-200 dark:bg-gray-800"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                >
                    <input
                        type="radio"
                        name="theme"
                        value={value}
                        checked={theme === value}
                        onChange={() =>
                            setTheme(value as "light" | "dark" | "system")
                        }
                        className="hidden"
                    />
                    <span className="w-5 h-5">{icon}</span>
                    <span>{label}</span>
                </label>
            ))}
        </div>
    );
}
