import { Router } from "express";
import { tableValidator } from "../middleware/validation/table.validation.js";
import { TableController } from "../controllers/table/tables.controller.js";
import { isBodyEmpty } from "../middleware/validation/body.validation.js";

const router = Router()
const controllers = new TableController()

router.get('/',)
router.post('/', isBodyEmpty, tableValidator, controllers.createTable)
router.patch('/')
router.delete('/')

export default router