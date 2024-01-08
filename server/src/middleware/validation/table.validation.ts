import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const objectIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/);

const validateSchema = Joi.object({
    id: Joi.string().length(8).required(),
    title: Joi.string().min(2).max(30).required(),
    columns: Joi.array().items(objectIdSchema)
})

export const tableValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body
        validateSchema.validateAsync(data)
        next()
    } catch (error) {
        if (Joi.isError(error)) {
            res.status(400).json({ ok: false, message: "Validation error", details: error.details });
        } else {
            next(error);
        }
    }
}