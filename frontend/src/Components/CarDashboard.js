import { useEffect, useState } from "react";
import { getAllCars, getAllFeatures, getAllModels } from "../Services/api.js";
import { Card, Button } from "antd";
import { CheckOutlined, WarningOutlined } from "@ant-design/icons";
import CarDashBoardButtons from "./CarDashBoardButtons.js";
import CarAccidentModal from "./CarAccidentModal.js";
import CreateCar from "./CreateCar.js";

const CarDashboard = () => {
  const [cars, setCars] = useState([]);
  const [features, setFeatures] = useState([]);
  const [models, setModels] = useState([]);
  const [showAccidentModal, setShowAccidentModal] = useState(false);
  const [showCreateCarModal, setShowCreateCarModal] = useState(true);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carList = await getAllCars();
        const modelList = await getAllModels();
        const featureList = await getAllFeatures();
        setCars(carList);
        setModels(modelList);
        setFeatures(featureList);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(cars);
  }, [cars]);

  const handleShowAccidentModal = (car) => {
    setSelectedCar(car);
    setShowAccidentModal(true);
  };

  return cars.map((car) => (
    <Card title={`${car.model.manufacturer} ${car.model.name} ${car.year}`}>
      <p>Mileage: {car.mileage} Km</p>
      <p>Price: {car.price}$</p>
      <p>
        <span className="features-label">Features:</span>
        {car.features.length ? (
          <ul className="inline-bullet-list">
            {car.features.map((feature, index) => (
              <li key={index} className="inline-bullet-item">
                ✪ {feature.name}
              </li>
            ))}
          </ul>
        ) : (
          "-"
        )}
      </p>
      <p>
        {car.accidents.length ? (
          <span>
            <WarningOutlined className="danger" />
            <Button type="link" onClick={() => handleShowAccidentModal(car)}>
              Show accident reports
            </Button>
          </span>
        ) : (
          <span>
            <CheckOutlined className="good" /> No Accident Reports
          </span>
        )}
      </p>
      <CarAccidentModal
        car={selectedCar}
        showAccidentModal={showAccidentModal}
        setShowAccidentModal={setShowAccidentModal}
      />
      <CreateCar
        showCreateCarModal={showCreateCarModal}
        setShowCreateCarModal={setShowCreateCarModal}
      />
      <CarDashBoardButtons carId={car.id} cars={cars} />
    </Card>
  ));
};

export default CarDashboard;