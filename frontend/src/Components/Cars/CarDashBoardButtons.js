import React from "react";
import { Button, message } from "antd";
import { deleteCar } from "../../Services/api";

const CarDashBoardButtons = ({ car, handleShowCreateCarModal, fetchData, handleShowCreateAccidentModal }) => {
  const [messageApi, contextHolder] = message.useMessage();

  const handleDeleteCar = async () => {
    await deleteCar(car.id);
    await fetchData();
    messageApi.open({
      type: "success",
      content: "Car Deleted Successfully",
    });
  };

  return (
    <>
      {contextHolder}
      <div className="car-action-buttons">
        <Button type="primary" onClick={() => handleShowCreateCarModal(car)}>
          Edit
        </Button>
        <Button danger type="primary" onClick={() => handleShowCreateAccidentModal(car)}>
          Report Accident
        </Button>
        <Button danger type="primary" onClick={handleDeleteCar}>
          Delete Car
        </Button>
      </div>
    </>
  );
};

export default CarDashBoardButtons;
