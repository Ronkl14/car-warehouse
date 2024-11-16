import React from "react";
import { Button } from "antd";

const CarDashBoardButtons = ({ car, handleShowCreateCarModal }) => {
  return (
    <div className="car-action-buttons">
      <Button type="primary" onClick={() => handleShowCreateCarModal(car)}>Edit</Button>
      <Button danger type="primary">
        Report Accident
      </Button>
      <Button danger type="primary">
        Delete Car
      </Button>
    </div>
  );
};

export default CarDashBoardButtons;
