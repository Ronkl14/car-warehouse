import { useState, useEffect } from "react";
import { getAllEmployees } from "../../Services/api";
import { Card, Button } from "antd";
import EmployeeDashboardButtons from "./EmployeeDashboardButtons";

const EmployeeDashboard = () => {
  const [employees, setEmployees] = useState([]);

  const fetchData = async () => {
    try {
      const employeeList = await getAllEmployees();
      setEmployees(employeeList);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Button
        type="primary"
        // onClick={() => handleShowCreateCarModal(null)}
      >
        Create New Employee
      </Button>
      {employees.map((employee) => (
        <Card
          className="card"
          title={`${employee.first_name} ${employee.last_name}`}
        >
          <p>Starting Date: {employee.starting_date.split('T')[0]}</p>
          <EmployeeDashboardButtons
      // car={car}
      // handleShowCreateCarModal={handleShowCreateCarModal}
      // handleShowCreateAccidentModal={handleShowCreateAccidentModal}
      // fetchData={fetchData}
    />
        </Card>
      ))}
    </div>
  );
};

export default EmployeeDashboard;
