import { useDispatch } from "react-redux";
import { showModal, setSelectedEmployee } from "../../store/slices/uiSlice";
import { fetchEmployees } from "../../store/slices/employeesSlice";
import { Button, message } from "antd";
import { deleteEmployee } from "../../Services/api";

const EmployeeDashboardButtons = ({ employee }) => {
  const dispatch = useDispatch();

  const [messageApi, contextHolder] = message.useMessage();

  const handleDeleteEmployee = async () => {
    await deleteEmployee(employee.id);
    dispatch(fetchEmployees());
    messageApi.open({
      type: "success",
      content: "Employee deleted successfully",
    });
  };

  const handleEditEmployee = () => {
    dispatch(setSelectedEmployee(employee));
    dispatch(showModal("showCreateEmployeeModal"));
  };

  return (
    <>
      {contextHolder}
      <div className="car-action-buttons">
        <Button type="primary" onClick={handleEditEmployee}>
          Edit
        </Button>
        <Button danger type="primary" onClick={handleDeleteEmployee}>
          Fire Employee
        </Button>
      </div>
    </>
  );
};

export default EmployeeDashboardButtons;
