import { Request, Response } from "express";

export interface ITableController {

    getTable(req: Request, res: Response): Promise<void>
    createTable(req: Request, res: Response): Promise<void>;
    updateTable(req: Request, res: Response): Promise<void>;
    deleteTable(req: Request, res: Response): Promise<void>;


    createTask(req: Request, res: Response): Promise<void>
    updateTask(req: Request, res: Response): Promise<void>
    deleteTask(req: Request, res: Response): Promise<void>

}