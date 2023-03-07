"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employee_routes_1 = __importDefault(require("../employee/employee.routes"));
const department_routes_1 = __importDefault(require("../department/department.routes"));
const routes = (0, express_1.Router)();
routes.use('/supplier', employee_routes_1.default);
routes.use('/department', department_routes_1.default);
exports.default = routes;
