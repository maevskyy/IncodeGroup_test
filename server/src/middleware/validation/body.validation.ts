import { Request, Response, NextFunction } from "express";

export const isBodyEmpty = (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;

        if (!data || Object.keys(data).length === 0) {
            throw new Error("Empty body");
        }

        next();
    } catch (error) {
        if (error instanceof Error && error.message === "Empty body") {
            res.status(400).json({ ok: false, message: "Request body cannot be empty" });
        } else {
            next(error);
        }

    }
};