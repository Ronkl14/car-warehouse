const { Employee } = require("../models");

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving employees", error });
  }
};

exports.createEmployee = async (req, res) => {
  try {
    const { first_name, last_name, starting_date } = req.body;

    const employee = await Employee.create({
      first_name,
      last_name,
      starting_date,
    });

    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: "Error creating employee", error });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const { first_name, last_name, starting_date } = req.body;

    await employee.update({ first_name, last_name, starting_date });

    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: "Error updating employee", error });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    await employee.destroy();
    res.status(200).json({ message: "Employee Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting employee", error });
  }
};
