import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchEmployees } from "../../store/slices/employeesSlice";
import { hideModal } from "../../store/slices/uiSlice";
import { Form, Modal, Input, Button, message } from "antd";
import { updateEmployee, createEmployee } from "../../Services/api";

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const { selectedEmployee, modals } = useSelector((state) => state.ui);

  const [form] = Form.useForm();
  const [shouldCreateNewEmployee, setShouldCreateNewEmployee] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (selectedEmployee) {
      form.setFieldsValue({
        first_name: selectedEmployee.first_name,
        last_name: selectedEmployee.last_name,
        starting_date: selectedEmployee.starting_date.split("T")[0],
      });
      setShouldCreateNewEmployee(false);
    } else {
      form.resetFields();
      setShouldCreateNewEmployee(true);
    }
  }, [selectedEmployee, form]);

  const handleSubmit = async (values) => {
    try {
      const employeeData = {
        first_name: values.first_name,
        last_name: values.last_name,
        starting_date: new Date(values.starting_date),
      };
      if (shouldCreateNewEmployee) {
        await createEmployee(employeeData);
        messageApi.open({
          type: "success",
          content: "Employee created successfully",
        });
      } else {
        await updateEmployee(employeeData, selectedEmployee.id);
        messageApi.open({
          type: "success",
          content: "Employee updated successfully",
        });
      }
      dispatch(fetchEmployees());
      dispatch(hideModal("showCreateEmployeeModal"));
    } catch (error) {
      console.log("error creating employee", error);
    }
  };

  return (
    <>
      {contextHolder}
      <Modal
        open={modals.showCreateEmployeeModal}
        footer={null}
        onCancel={() => dispatch(hideModal("showCreateEmployeeModal"))}
      >
        <h3>Create New Employee</h3>
        <Form form={form} onFinish={handleSubmit}>
          <Form.Item
            label="First Name"
            name="first_name"
            rules={[{ required: true, message: "Please enter first name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="last_name"
            rules={[{ required: true, message: "Please enter Last name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Starting Date"
            name="starting_date"
            rules={[
              { required: true, message: "Please enter starting date" },
              {
                pattern: /^\d{4}-\d{2}-\d{2}$/,
                message: "Date must be in the format yyyy-mm-dd",
              },
            ]}
          >
            <Input placeholder="yyyy-mm-dd" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CreateEmployee;
