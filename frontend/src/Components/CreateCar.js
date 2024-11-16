import React, { useEffect, useState } from "react";
import { Form, Modal, Select, Input, Checkbox, Button, message } from "antd";
import { createCar, updateCar } from "../Services/api.js";

const CreateCar = ({
  showCreateCarModal,
  setShowCreateCarModal,
  features,
  models,
  car,
  fetchData,
}) => {
  const [form] = Form.useForm();
  const [featureIds, setFeatureIds] = useState([]);
  const [shouldCreateNewCar, setShouldCreateNewCar] = useState();

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (car) {
      form.setFieldsValue({
        model_id: car.model_id,
        year: car.year,
        mileage: car.mileage,
        price: car.price,
      });
      setFeatureIds(car.features.map((feature) => feature.id));
      setShouldCreateNewCar(false);
    } else {
      form.setFieldsValue({
        model_id: null,
        year: null,
        mileage: null,
        price: null,
      });
      setFeatureIds([]);
      setShouldCreateNewCar(true);
    }
  }, [car, form]);

  const handleFeatureIds = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;

    setFeatureIds((prev) =>
      checked ? [...prev, value] : prev.filter((id) => id !== value)
    );
  };

  const handleSubmit = async (values) => {
    try {
      const carData = {
        model_id: values.model_id,
        year: values.year,
        price: values.price,
        mileage: values.mileage,
        feature_ids: featureIds || [],
      };
      if (shouldCreateNewCar) {
        await createCar(carData);
        messageApi.open({
          type: "success",
          content: "Car Created Successfully",
        });
      } else {
        await updateCar(carData, car.id);
        messageApi.open({
          type: "success",
          content: "Car Updated Successfully",
        });
      }
      fetchData();
      setShowCreateCarModal(false);
    } catch (error) {
      console.log("error creating car", error);
    }
  };

  return (
    <>
      {contextHolder}
      <Modal
        open={showCreateCarModal}
        footer={null}
        onCancel={() => setShowCreateCarModal(false)}
      >
        <h3>Create New Car</h3>
        <Form form={form} onFinish={handleSubmit}>
          <Form.Item
            label="Model"
            name="model_id"
            rules={[{ required: true, message: "Please select model" }]}
          >
            <Select
              options={models.map((model) => ({
                value: model.id,
                label: `${model.manufacturer} ${model.name}`,
              }))}
            ></Select>
          </Form.Item>
          <Form.Item
            label="Year"
            name="year"
            rules={[{ required: true, message: "Please enter year" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mileage"
            name="mileage"
            rules={[{ required: true, message: "Please enter price" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please enter price" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Features">
            {features.map((feature) => (
              <Checkbox
                value={feature.id}
                onChange={(e) => {
                  handleFeatureIds(e);
                }}
                checked={featureIds.includes(feature.id)}
              >
                {feature.name}
              </Checkbox>
            ))}
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

export default CreateCar;
