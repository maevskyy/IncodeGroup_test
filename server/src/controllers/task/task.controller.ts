import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { ITaskController } from "./task.interface.js";
import columnModel from "../../models/column.model.js";

export class TaskController implements ITaskController {
    async createTask(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> {
        const taskData = req.body
        const { columnId } = req.params

        try {
            const updatedColumn = await columnModel.findByIdAndUpdate(
                columnId,
                { '$push': { tasks: taskData } },
                { new: true }
            )

            if (updatedColumn) {
                res.status(200).json({ ok: true, message: 'Task has been created', data: updatedColumn });
            }
            else {
                res.status(404).json({ ok: false, message: 'Cannot find column' })
            }

        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ ok: false, message: 'Cannot create task', error: error.message });
            } else {
                res.status(500).json({ ok: false, message: 'Cannot create task', error: 'Unknown error' });
            }
        }
    }
    async deleteTask(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> {
        const { columnId, taskId } = req.params
        try {
            await columnModel.findByIdAndUpdate(
                columnId,
                { "$pull": { tasks: { _id: taskId } } },
                { new: true }
            )
            res.status(200).json({ ok: true, message: 'Task deleted' })
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ ok: false, message: 'Cannot delete task', error: error.message });
            } else {
                res.status(500).json({ ok: false, message: 'Cannot delete task', error: 'Unknown error' });
            }
        }
    }
    async updateTask(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> {
        const { columnId, taskId } = req.params
        const { title, description } = req.body
        try {

            const updatedColumn = await columnModel.findOneAndUpdate(
                { _id: columnId, 'tasks._id': taskId },
                {
                    $set: {
                        'tasks.$.title': title,
                        'tasks.$.description': description,
                    },
                }
            );

            if (updatedColumn) {
                res.status(200).json({ ok: true, message: 'Task updated', data: updatedColumn });
            } else {
                res.status(404).json({ ok: false, message: 'Task not found', data: updatedColumn });
            }

        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ ok: false, message: 'Cannot update task', error: error.message });
            } else {
                res.status(500).json({ ok: false, message: 'Cannot update task', error: 'Unknown error' });
            }
        }

    }

}