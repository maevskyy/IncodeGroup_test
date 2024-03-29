import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { ITableController } from "./table.interface.js";
import tableModel from "../../models/table.model.js";
import columnModel, { IColumn } from "../../models/column.model.js";
import { Types } from "mongoose";

export class TableController implements ITableController {

    async getTable(req: Request, res: Response): Promise<void> {
        const { tableId } = req.params;

        try {
            let table;

            if (tableId.length === 8) {
                table = await tableModel.findOne({ id: tableId });
            } else if (Types.ObjectId.isValid(tableId)) {
                table = await tableModel.findById(tableId);
            } else {
                res.status(400).json({ ok: false, message: 'Invalid tableId format', data: null });
            }

            if (table) {
              const columnsData = await Promise.all(table.columns.map((columnId) => columnModel.findById(columnId)));
              const joinedTable = { ...table.toObject(), columns: columnsData };

              res.status(200).json({ ok: true, message: 'Table found', data: joinedTable });
          } else {
              res.status(404).json({ ok: false, message: 'Table not found', data: null });
          }
        } catch (error) {
            res.status(500).json({ ok: false, message: 'Internal Server Error', error: error });
        }
    }

    async createTable(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> {
        const { columns, ...tableWithoutColumns } = req.body

        const createColumnPromises = columns.map(async (columnData: IColumn) => {
            const createdColumn = await columnModel.create(columnData);
            return createdColumn._id;
        });

        try {

            const createdColumnIds = await Promise.all(createColumnPromises);

            const createdTable = await tableModel.create({
                ...tableWithoutColumns,
                columns: createdColumnIds,
            })
            res.status(200).json({ ok: true, message: 'Table created', table: { _id: createdTable._id } })
        } catch (error) {
            res.status(500).json({ ok: false, message: "Cannot create table", error: error })
        }
    }

    async deleteTable(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> {
        const { tableId } = req.params

        try {
            const table = await tableModel.findById(tableId)
            if (table) {

                const columns = table.columns
                //deleting all columns
                await Promise.all(columns.map(columnId => columnModel.findByIdAndDelete(columnId)))
                await tableModel.findByIdAndDelete(tableId)


                res.status(200).json({ ok: true, message: "Table deleted" });
            } else {
                res.status(404).json({ ok: false, message: "Table not found", data: null });
            }
        } catch (error) {
            res.status(500).json({ ok: false, message: "Internal Server Error", error: error });
        }
    }

}