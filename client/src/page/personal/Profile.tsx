import EditProfileForm from "@/components/personal/profile/edit-profile-form";
import useUserId from "@/hooks/api/use-user-id";
import { Separator } from "@/components/ui/separator";
import React from "react";
import ProfileCover from "@/components/personal/profile/profile-cover-avatar";

const Profile = () => {
    return (
        <div className="w-full h-auto py-2">
            <ProfileCover />
            <Separator className="my-4 " />
            <main>
                <div className="w-full max-w-3xl mx-auto py-3">
                    <h2 className="text-[20px] leading-[30px] font-semibold mb-3">
                        Profile
                    </h2>

                    <div className="flex flex-col pt-0.5 px-0 ">
                        <div className="pt-2">
                            <EditProfileForm />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Profile;
