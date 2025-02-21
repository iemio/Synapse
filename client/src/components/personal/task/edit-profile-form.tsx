import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "../../ui/textarea";
import { useAuthContext } from "@/context/auth-provider";
import { useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editWorkspaceMutationFn } from "@/lib/api";
import useWorkspaceId from "@/hooks/use-workspace-id";
import { toast } from "@/hooks/use-toast";
import { Loader } from "lucide-react";
import { Permissions } from "@/constant";
import useUserId from "@/hooks/api/use-user-id";
import Profile from "@/page/personal/Profile";

export default function EditProfileForm() {
    const queryClient = useQueryClient();

    const { user } = useAuthContext();

    const userId = useUserId();
    // const { mutate, isPending } = useMutation({
    //     mutationFn: editProfileMutationFn,
    // });
    const isPending = true;

    const formSchema = z.object({
        name: z.string().trim().min(1, {
            message: "Profile name is required",
        }),
        email: z.string().trim(),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
        },
    });

    //add edit pic also

    useEffect(() => {
        if (user) {
            form.setValue("name", user.name);
            form.setValue("email", user?.email || "");
        }
    }, [form, user]);

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        if (isPending) return;
        const payload = {
            userId: userId,
            data: { ...values },
        };
        // mutate(payload, {
        //     onSuccess: () => {
        //         queryClient.invalidateQueries({
        //             queryKey: ["workspace"],
        //         });
        //         queryClient.invalidateQueries({
        //             queryKey: ["userWorkspaces"],
        //         });
        //     },
        //     onError: (error) => {
        //         toast({
        //             title: "Error",
        //             description: error.message,
        //             variant: "destructive",
        //         });
        //     },
        // });
    };

    return (
        <div className="w-full h-auto max-w-full">
            <div className="h-full">
                <div className="mb-5 border-b">
                    <h1
                        className="text-[17px] tracking-[-0.16px] dark:text-[#fcfdffef] font-semibold mb-1.5
           text-center sm:text-left"
                    >
                        Edit Profile
                    </h1>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="dark:text-[#f1f7feb5] text-sm">
                                            User name
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Taco's Co."
                                                className="!h-[48px] disabled:opacity-90 disabled:pointer-events-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="mb-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="dark:text-[#f1f7feb5] text-sm">
                                            Email
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Taco's Co."
                                                className="!h-[48px] disabled:opacity-60 disabled:pointer-events-none"
                                                disabled
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button
                            className="flex place-self-end  h-[40px] text-white font-semibold"
                            disabled={isPending}
                            type="submit"
                        >
                            {isPending && <Loader className="animate-spin" />}
                            Update Profile
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
