import { z } from "zod";

export const nameSchema = z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(255);

export const skillsSchema = z.array(z.string()).optional();

export const userIdSchema = z
    .string()
    .trim()
    .min(1, { message: "User ID is required" });

export const updateUserSchema = z.object({
    name: nameSchema,
    skills: skillsSchema,
});
