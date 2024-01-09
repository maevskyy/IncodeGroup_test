import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const taskSchema = Joi.object({
    title: Joi.string().min(1).max(30).required(),
    description: Joi.string(),
});


export const taskValidator = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        await taskSchema.validateAsync(data);
        next();
    } catch (error) {
        if (Joi.isError(error)) {
            res.status(400).json({ ok: false, message: "Validation error", details: error.details });
        } else {
            next(error);
        }
    }
};