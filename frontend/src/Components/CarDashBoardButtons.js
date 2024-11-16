import React from "react";
import { Button } from "antd";
import { deleteCar } from "../Services/api";

const CarDashBoardButtons = ({ car, handleShowCreateCarModal, fetchData }) => {
  const handleDeleteCar = async () => {
    await deleteCar(car.id);
    await fetchData()
  };

  return (
    <div className="car-action-buttons">
      <Button type="primary" onClick={() => handleShowCreateCarModal(car)}>
        Edit
      </Button>
      <Button danger type="primary">
        Report Accident
      </Button>
      <Button danger type="primary" onClick={handleDeleteCar}>
        Delete Car
      </Button>
    </div>
  );
};

export default CarDashBoardButtons;
