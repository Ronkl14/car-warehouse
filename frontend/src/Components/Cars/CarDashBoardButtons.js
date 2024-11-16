import React from "react";
import { useDispatch } from "react-redux";
import { showModal, setSelectedCar } from "../../store/slices/uiSlice";
import { fetchCars } from "../../store/slices/carsSlice";
import { Button, message } from "antd";
import { deleteCar } from "../../Services/api";

const CarDashBoardButtons = ({ car }) => {
  const dispatch = useDispatch();

  const [messageApi, contextHolder] = message.useMessage();

  const handleDeleteCar = async () => {
    await deleteCar(car.id);
    dispatch(fetchCars());
    messageApi.open({
      type: "success",
      content: "Car Deleted Successfully",
    });
  };

  const handleEditCar = () => {
    dispatch(setSelectedCar(car));
    dispatch(showModal("showCreateCarModal"));
  };

  const handleCreateAccident = () => {
    dispatch(setSelectedCar(car));
    dispatch(showModal("showCreateAccidentModal"));
  };

  return (
    <>
      {contextHolder}
      <div className="car-action-buttons">
        <Button type="primary" onClick={handleEditCar}>
          Edit
        </Button>
        <Button danger type="primary" onClick={handleCreateAccident}>
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
