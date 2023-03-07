import { Request, Response } from "express";
import {
  createEmployeeService,
  findAllEmployeeService,
  findEmployeeService,
} from "./employee.service";

export const createEmployeeController = async (
  request: Request,
  response: Response
) => {
  return await createEmployeeService(request, response);
};

export const findAllEmployeeController = async (
  request: Request,
  response: Response
) => {
  return await findAllEmployeeService(request, response);
};

export const findEmployeeController = async (
  request: Request,
  response: Response
) => {
  return await findEmployeeService(request, response);
};
