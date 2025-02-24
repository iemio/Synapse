import ThemeSelector from "@/components/personal/settings/theme-selector";
import useUserId from "@/hooks/api/use-user-id";

const PersonalSettings = () => {
    const userId = useUserId();
    return (
        <div>
            {userId}'s settings
            <ThemeSelector />
        </div>
    );
};

export default PersonalSettings;
