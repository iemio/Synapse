import React, { useState } from "react";
import { useAuthContext } from "@/context/auth-provider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editUserProfileCoverMutationFn } from "@/lib/api";
import { toast } from "@/hooks/use-toast";
import useUserId from "@/hooks/api/use-user-id";

const ProfileCover = () => {
    const { user } = useAuthContext();
    const userId = useUserId();
    const queryClient = useQueryClient();

    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState(
        user?.profilePicture || ""
    );

    const { mutate, isPending } = useMutation({
        mutationFn: editUserProfileCoverMutationFn,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["userProfile"] });
            toast({ title: "Success", description: "Profile picture updated" });
        },
        onError: (error) => {
            toast({
                title: "Error",
                description: error.message,
                variant: "destructive",
            });
        },
    });

    const handleImageChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setSelectedImage(file);
        setPreviewImage(URL.createObjectURL(file));

        // Upload to Cloudinary
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "synapse"); // Set your Cloudinary upload preset

        try {
            const res = await fetch(
                "https://api.cloudinary.com/v1_1/dntc8hff4/image/upload",
                {
                    method: "POST",
                    body: formData,
                }
            );
            const data = await res.json();
            if (data.secure_url) {
                mutate({ userId, data: { profilePicture: data.secure_url } });
            }
        } catch (error) {
            console.error("Upload error:", error);
        }
    };

    return (
        <div className="user-card">
            {/* Card Cover */}
            <div
                className="card-cover bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://cdn.tailkit.com/media/placeholders/photo-JgOeRuGD_Y4-800x400.jpg')",
                }}
            >
                <div className="avatar-wrapper">
                    <label htmlFor="profile-upload" className="cursor-pointer">
                        <div className="avatar">
                            <img
                                src={
                                    previewImage ||
                                    "https://cdn.tailkit.com/media/placeholders/avatar-c_GmwfHBDzk-160x160.jpg"
                                }
                                alt="User Avatar"
                                className="avatar-img"
                            />
                        </div>
                        <input
                            type="file"
                            id="profile-upload"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ProfileCover;
