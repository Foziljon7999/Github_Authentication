
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { ErrorHandler } from "@errors";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            throw new Error("Token not provided");
        }

        const token = authHeader.split(" ")[1];

        const data = verify(token, process.env.JWT_SECRET || "SECRET");

        next();
    } catch (error: any) {
        if (error.message?.includes("jwt must be provided")) {
            next(new ErrorHandler("Token not provided", 401));
        } else if (error.message?.includes("jwt expired")) {
            next(new ErrorHandler("Token expired", 401));
        } else {
            next(new ErrorHandler(error.message, error.status || 500));
        }
    }
};
