import { Router } from "express";
import { tableValidator } from "../middleware/validation/table.validation.js";
import { TableController } from "../controllers/table/tables.controller.js";
import { isBodyEmpty } from "../middleware/validation/body.validation.js";
import { columnsValidator } from "../middleware/validation/columns.validation.js";
import { ColumnController } from "../controllers/column/column.controller.js";
import { TaskController } from "../controllers/task/task.controller.js";
import { taskValidator } from "../middleware/validation/task.validation.js";

const router = Router()
const tableControllers = new TableController()
const columnControllers = new ColumnController()
const taskControllers = new TaskController()

//table
router.get('/:tableId', tableControllers.getTable)
router.post('/', isBodyEmpty, tableValidator, tableControllers.createTable)
router.delete('/:tableId', tableControllers.deleteTable)

//column
router.post('/column/:tableId', isBodyEmpty, columnsValidator, columnControllers.createColumn)
router.patch('/column/:columnId', isBodyEmpty, columnControllers.updateColumn)
router.delete('/column/:tableId/:columnId', columnControllers.deleteColumn)

//task 
router.post('/task/:columnId', isBodyEmpty, taskControllers.createTask)
router.patch('/task/:columnId/:taskId', isBodyEmpty, taskValidator, taskControllers.updateTask)
router.delete('/task/:columnId/:taskId', taskControllers.deleteTask)

export default router