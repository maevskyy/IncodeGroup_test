import { Request, Response } from "express";

export interface IColumnController {

    createColumn(req: Request, res: Response): Promise<void>;
    deleteColumn(req: Request, res: Response): Promise<void>;
    updateColumn(req: Request, res: Response): Promise<void>;

}