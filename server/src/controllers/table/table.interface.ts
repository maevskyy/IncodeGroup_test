import { Request, Response } from "express";

export interface ITableController {

    getTable(req: Request, res: Response): Promise<void>
    createTable(req: Request, res: Response): Promise<void>;
    deleteTable(req: Request, res: Response): Promise<void>;

}