import useUserId from "@/hooks/api/use-user-id";
import React from "react";

const PersonalSettings = () => {
    const userId = useUserId();
    return <div>{userId}'s settings</div>;
};

export default PersonalSettings;
