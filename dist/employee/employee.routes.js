"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employee_controllers_1 = require("./employee.controllers");
const employeeRouter = (0, express_1.Router)();
employeeRouter.post("/", employee_controllers_1.createEmployeeController);
exports.default = employeeRouter;
