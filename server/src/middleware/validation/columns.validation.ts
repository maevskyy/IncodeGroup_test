import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const taskSchema = Joi.object({
    id: Joi.string().length(8).required(),
    title: Joi.string().min(1).max(30).required(),
    description: Joi.string(),
});

const columnsSchema = Joi.object({
    id: Joi.string().length(8).required(),
    title: Joi.string().required(),
    tasks: Joi.array().items(taskSchema),
});

export const columnsValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        columnsSchema.validateAsync(data);
        next();
    } catch (error) {
        if (Joi.isError(error)) {
            res.status(400).json({ ok: false, message: "Validation error", details: error.details });
        } else {
            next(error);
        }
    }
};