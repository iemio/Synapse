import jwt, { SignOptions } from "jsonwebtoken";
import { UserDocument } from "../models/user.model";
import { config } from "../config/app.config";
import ms from "ms";

export type AccessTPayload = {
    userId: UserDocument["_id"];
};

type SignOptsAndSecret = SignOptions & {
    secret: string;
};

const defaults: SignOptions = {
    audience: ["user"],
};

const convertToSeconds = (time: string): number => {
    const unit = time.slice(-1); // Get the last character (d, h, m, s)
    const value = parseInt(time.slice(0, -1), 10); // Extract the numeric part

    switch (unit) {
        case "d":
            return value * 86400; // Days to seconds
        case "h":
            return value * 3600; // Hours to seconds
        case "m":
            return value * 60; // Minutes to seconds
        case "s":
            return value; // Already in seconds
        default:
            throw new Error("Invalid time format. Use d, h, m, or s.");
    }
};

export const accessTokenSignOptions: SignOptsAndSecret = {
    expiresIn: convertToSeconds(config.JWT_EXPIRES_IN),
    secret: config.JWT_SECRET,
};

export const signJwtToken = (
    payload: AccessTPayload,
    options?: SignOptsAndSecret
) => {
    const { secret, ...opts } = options || accessTokenSignOptions;
    return jwt.sign(payload, secret, {
        ...defaults,
        ...opts,
    });
};
