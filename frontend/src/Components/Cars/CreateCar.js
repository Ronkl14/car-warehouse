import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCars } from "../../store/slices/carsSlice.js";
import { hideModal } from "../../store/slices/uiSlice.js";
import { Form, Modal, Select, Input, Checkbox, Button, message } from "antd";
import { createCar, updateCar } from "../../Services/api";

const CreateCar = () => {
  const dispatch = useDispatch();
  const { selectedCar, modals } = useSelector((state) => state.ui);
  const staticData = useSelector((state) => state.staticData);

  const [form] = Form.useForm();
  const [featureIds, setFeatureIds] = useState([]);
  const [shouldCreateNewCar, setShouldCreateNewCar] = useState();

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (selectedCar) {
      form.setFieldsValue({
        model_id: selectedCar.model_id,
        year: selectedCar.year,
        mileage: selectedCar.mileage,
        price: selectedCar.price,
      });
      setFeatureIds(selectedCar.features.map((feature) => feature.id));
      setShouldCreateNewCar(false);
    } else {
      form.resetFields();
      setFeatureIds([]);
      setShouldCreateNewCar(true);
    }
  }, [selectedCar, form]);

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
        await updateCar(carData, selectedCar.id);
        messageApi.open({
          type: "success",
          content: "Car Updated Successfully",
        });
      }
      dispatch(fetchCars());
      dispatch(hideModal("showCreateCarModal"));
    } catch (error) {
      console.log("error creating car", error);
    }
  };

  return (
    <>
      {contextHolder}
      <Modal
        open={modals.showCreateCarModal}
        footer={null}
        onCancel={() => dispatch(hideModal("showCreateCarModal"))}
      >
        <h3>Create New Car</h3>
        <Form form={form} onFinish={handleSubmit}>
          <Form.Item
            label="Model"
            name="model_id"
            rules={[{ required: true, message: "Please select model" }]}
          >
            <Select
              options={staticData.models.map((model) => ({
                value: model.id,
                label: `${model.manufacturer} ${model.name}`,
              }))}
            ></Select>
          </Form.Item>
          <Form.Item
            label="Year"
            name="year"
            rules={[
              { required: true, message: "Please enter year" },
              {
                pattern: /^\d{4}$/,
                message: "Year must be a 4-digit number",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mileage"
            name="mileage"
            rules={[
              { required: true, message: "Please enter price" },
              {
                pattern: /^\d+$/,
                message: "Only numbers are allowed",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              { required: true, message: "Please enter price" },
              {
                pattern: /^\d+$/,
                message: "Only numbers are allowed",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Features">
            {staticData.features.map((feature) => (
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
