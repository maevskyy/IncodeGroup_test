import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { IColumnController } from "./column.interface.js";
import columnModel, { IColumn } from "../../models/column.model.js";
import tableModel from "../../models/table.model.js";
import { table } from "console";

export class ColumnController implements IColumnController {

    async createColumn(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> {
        const columnData: IColumn = req.body
        const { tableId } = req.params

        try {
            const isTableExist = await tableModel.exists({ _id: tableId })
            if (isTableExist) {
                const createdColumn = await columnModel.create(columnData)
                if (!createdColumn) {
                    res.status(400).json({ ok: false, message: "Cannor create column" })
                }
                else {
                    const table = await tableModel.findByIdAndUpdate(
                        tableId,
                        { '$push': { columns: createdColumn._id } },
                        { new: true }
                    )
                    if (table) {
                        res.status(200).json({ ok: true, message: 'Column created' })
                    }
                    else {
                        res.status(404).json({ ok: false, message: "Cannot update table" });
                    }
                }
            }

        } catch (error) {
            res.status(500).json({ ok: false, message: "Cannot find table" });
        }
    }
    async deleteColumn(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> {

        const { tableId, columnId } = req.params
        try {
            await tableModel.findByIdAndUpdate(
                tableId,
                { '$pull': { columns: columnId } }
            )
            await columnModel.findByIdAndDelete(columnId)
            res.status(200).json({ ok: true, message: 'Column deleted' })

        } catch (error) {
            //!type fix
            //@ts-ignore
            res.status(500).json({ ok: false, message: "Cannot delete column", error: error.message });

        }
    }
    updateColumn(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> {
        throw new Error("Method not implemented.");
    }

}