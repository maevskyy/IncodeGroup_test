import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { columnsSchema } from "./columns.validation.js";


const validateSchema = Joi.object({
    id: Joi.string().length(8).required(),
    title: Joi.string().min(2).max(30).required(),
    columns: Joi.array().items(columnsSchema).min(3).required()
})

export const tableValidator = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body
        await validateSchema.validateAsync(data)
        for (const column of data.columns) {
            await columnsSchema.validateAsync(column);
        }
        next()
    } catch (error) {

        if (Joi.isError(error)) {
            res.status(400).json({ ok: false, message: "Validation error", details: error.details });
        } else {
            next(error);
        }
    }
}