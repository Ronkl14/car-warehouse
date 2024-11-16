import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedEmployee, showModal } from "../../store/slices/uiSlice";
import { Card, Button } from "antd";
import EmployeeDashboardButtons from "./EmployeeDashboardButtons";
import { fetchEmployees } from "../../store/slices/employeesSlice";
import CreateEmployee from "./CreateEmployee";

const EmployeeDashboard = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.employees);
  const employeesStatus = useSelector((state) => state.employees.status);

  useEffect(() => {
    if (employeesStatus === "idle") {
      dispatch(fetchEmployees());
    }
  }, [employeesStatus, dispatch]);

  const handleCreateEmployee = () => {
    dispatch(setSelectedEmployee(null));
    dispatch(showModal("showCreateEmployeeModal"));
  };

  return (
    <div>
      <Button type="primary" onClick={handleCreateEmployee}>
        Create New Employee
      </Button>
      {employees.map((employee) => (
        <Card
          key={employee.id}
          className="card"
          title={`${employee.first_name} ${employee.last_name}`}
        >
          <p>Starting Date: {employee.starting_date.split("T")[0]}</p>
          <EmployeeDashboardButtons employee={employee} />
        </Card>
      ))}
      <CreateEmployee />
    </div>
  );
};

export default EmployeeDashboard;
