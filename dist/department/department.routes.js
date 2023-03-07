"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const department_controllers_1 = require("./department.controllers");
const departmentRouter = (0, express_1.Router)();
departmentRouter.post("/", department_controllers_1.createDepartmentController);
exports.default = departmentRouter;
