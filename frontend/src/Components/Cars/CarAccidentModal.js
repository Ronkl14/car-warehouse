import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";

const CarAccidentModal = ({ car, showAccidentModal, setShowAccidentModal }) => {
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    let totalCost = car?.accidents.reduce(
      (acc, curr) => (acc += curr.costs),
      0
    );
    console.log(totalCost);
    setTotalCost(totalCost);
  }, [car]);

  return (
    <Modal
      open={showAccidentModal}
      onCancel={() => setShowAccidentModal(false)}
      footer={<Button type="primary" onClick={() => setShowAccidentModal(false)}>OK</Button>}
    >
      <h3>
        Accident Reports for {car?.model.manufacturer} {car?.model.name}{" "}
        {car?.year}
      </h3>
      <ul>
        {car?.accidents.map((accident, index) => (
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
