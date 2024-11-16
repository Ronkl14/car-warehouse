import React, { useEffect } from "react";
import { Form, Modal, Input, Button, message } from "antd";
import { createAccident } from "../../Services/api";

const CreateAccident = ({
  showCreateAccidentModal,
  setShowCreateAccidentModal,
  car,
  fetchData
}) => {
  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    form.setFieldsValue({
        date: null,
        description: null,
        cost: null
    })
  }, [])

  const handleSubmit = async (values) => {
    try {
      const accidentData = {
        car_id: car.id,
        date: new Date(values.date),
        description: values.description,
        costs: values.cost,
      };
      await createAccident(accidentData);
      messageApi.open({
        type: "success",
        content: "Accident Created Successfully",
      });
      fetchData()
      setShowCreateAccidentModal(false)
    } catch (error) {}
  };

  return (
    <>
      {contextHolder}
      <Modal
        open={showCreateAccidentModal}
        footer={null}
        onCancel={() => setShowCreateAccidentModal(false)}
      >
        <h3>Create New Accident</h3>
        <Form form={form} onFinish={handleSubmit}>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Please enter date" }]}
          >
            <Input placeholder="yyyy-mm-dd"/>
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
