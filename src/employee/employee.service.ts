import { Request, Response } from "express";
import { Department } from "../entities/Department";
import { Employee } from "../entities/Employee";

export const createEmployeeService = async (
  data: Request,
  response: Response
) => {
  const { titleDepartment, titleEmployee, descriptionEmployee } = data.body;

  const department: any = await Department.findOneBy({
    title: titleDepartment,
  });

  if (department === null)
    return response.status(200).json({ message: "Department not exists" });

  const employee: any = await Employee.findOneBy({ title: titleEmployee });

  if (employee !== null)
    return response.status(200).json({ message: "Employee already exists" });

  const employ = new Employee();

  employ.title = titleEmployee;
  employ.description = descriptionEmployee;
  employ.department = department;

  try {
    await employ.save();
    return response.status(202).json({ message: "Employee create success!" });
  } catch (error: any) {
    if (error instanceof Error)
      return response.status(500).json({ message: error.message });
  }
};

export const findAllEmployeeService = async (
  request: Request,
  response: Response
) => {
 
  try {
    const employee: any = await Employee.find({
      relations: {
        department: true,
      },
    });
    
    if (employee === null || employee.length === 0)
    return response.status(404).json({ message: "No employee found!" });

  
    return response.status(200).json({ employee });
  } catch (error: any) {
    if (error instanceof Error)
      return response.status(500).json({ message: error.message });
  }
};

export const findEmployeeService = async (
  request: Request,
  response: Response
) => {
  const { id } = request.params;

  try {
    const employee: any = await Employee.find({
      where: {
        id: parseInt(id),
      },
      relations: {
        department: true,
      },
    });

    if (employee === null || employee.length === 0)
      return response.status(404).json({ message: "Employee not found!" });

    return response.status(200).json({ employee });
  } catch (error: any) {
    if (error instanceof Error)
      return response.status(500).json({ message: error.message });
  }
};
