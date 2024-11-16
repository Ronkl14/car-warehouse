import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button } from "antd";
import { hideModal } from "../../store/slices/uiSlice";

const CarAccidentModal = () => {
  const dispatch = useDispatch();
  const { selectedCar, modals } = useSelector((state) => state.ui);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    let totalCost = selectedCar?.accidents.reduce(
      (acc, curr) => (acc += curr.costs),
      0
    );
    console.log(totalCost);
    setTotalCost(totalCost);
  }, [selectedCar]);

  return (
    <Modal
      open={modals.showAccidentModal}
      onCancel={() => dispatch(hideModal("showAccidentModal"))}
      footer={
        <Button
          type="primary"
          onClick={() => dispatch(hideModal("showAccidentModal"))}
        >
          OK
        </Button>
      }
    >
      <h3>
        Accident Reports for {selectedCar?.model.manufacturer}{" "}
        {selectedCar?.model.name} {selectedCar?.year}
      </h3>
      <ul>
        {selectedCar?.accidents.map((accident, index) => (
          <li key={index}>
            <p>Date: {accident.date.split("T")[0]}</p>
            <p>Description: {accident.description}</p>
            <p>Cost: {accident.costs}$</p>
          </li>
        ))}
      </ul>
      <span className="danger">Total Accidents Cost: {totalCost}$</span>
    </Modal>
  );
};

export default CarAccidentModal;
