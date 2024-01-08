import { Router } from "express";
import { tableValidator } from "../middleware/validation/table.validation.js";
import { TableController } from "../controllers/table/tables.controller.js";
import { isBodyEmpty } from "../middleware/validation/body.validation.js";
import { columnsValidator } from "../middleware/validation/columns.validation.js";
import { ColumnController } from "../controllers/column/column.controller.js";

const router = Router()
const tableControllers = new TableController()
const columnControllers = new ColumnController()

//table
router.get('/:tableId', tableControllers.getTable)
router.post('/', isBodyEmpty, tableValidator, tableControllers.createTable)
router.delete('/:tableId', tableControllers.deleteTable)

//column
router.post('/column/:tableId', isBodyEmpty, columnsValidator, columnControllers.createColumn)
router.delete('/column/:tableId/:columnId', columnControllers.deleteColumn)

export default router