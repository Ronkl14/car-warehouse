import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../store/slices/carsSlice";
import { Form, Modal, Input, Button, message } from "antd";
import { createAccident } from "../../Services/api";
import { hideModal } from "../../store/slices/uiSlice";

const CreateAccident = () => {
  const dispatch = useDispatch();
  const { selectedCar, modals } = useSelector((state) => state.ui);

  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    form.resetFields();
  }, []);

  const handleSubmit = async (values) => {
    try {
      const accidentData = {
        car_id: selectedCar.id,
        date: new Date(values.date),
        description: values.description,
        costs: values.cost,
      };
      await createAccident(accidentData);
      messageApi.open({
        type: "success",
        content: "Accident Created Successfully",
      });
      dispatch(fetchCars());
      dispatch(hideModal("showCreateAccidentModal"));
    } catch (error) {}
  };

  return (
    <>
      {contextHolder}
      <Modal
        open={modals.showCreateAccidentModal}
        footer={null}
        onCancel={() => dispatch(hideModal("showCreateAccidentModal"))}
      >
        <h3>Create New Accident</h3>
        <Form form={form} onFinish={handleSubmit}>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Please enter date" }]}
          >
            <Input placeholder="yyyy-mm-dd" />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please enter description" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Cost"
            name="cost"
            rules={[{ required: true, message: "Please enter cost" }]}
          >
            <Input />
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

export default CreateAccident;
