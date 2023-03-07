import { Router } from "express";

import {
  createEmployeeController,
  findAllEmployeeController,
  findEmployeeController,
} from "./employee.controllers";

const employeeRouter = Router();

employeeRouter.post("/", createEmployeeController);
employeeRouter.get("/:id", findEmployeeController);
employeeRouter.get("/all", findAllEmployeeController);

export default employeeRouter;
