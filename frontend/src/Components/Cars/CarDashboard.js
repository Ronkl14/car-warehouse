import { useEffect, useState } from "react";
import {
  getAllCars,
  getAllFeatures,
  getAllModels,
} from "../../Services/api.js";
import { Card, Button } from "antd";
import { CheckOutlined, WarningOutlined } from "@ant-design/icons";
import CarDashBoardButtons from "./CarDashBoardButtons.js";
import CarAccidentModal from "./CarAccidentModal.js";
import CreateCar from "./CreateCar.js";
import CreateAccident from "./CreateAccident.js";

const CarDashboard = () => {
  const [cars, setCars] = useState([]);
  const [features, setFeatures] = useState([]);
  const [models, setModels] = useState([]);
  const [showAccidentModal, setShowAccidentModal] = useState(false);
  const [showCreateCarModal, setShowCreateCarModal] = useState(false);
  const [showCreateAccidentModal, setShowCreateAccidentModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

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

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(cars);
  }, [cars]);

  const handleShowAccidentModal = (car) => {
    setSelectedCar(car);
    setShowAccidentModal(true);
  };

  const handleShowCreateCarModal = (car) => {
    setSelectedCar(car);
    setShowCreateCarModal(true);
  };

  const handleShowCreateAccidentModal = (car) => {
    setSelectedCar(car);
    setShowCreateAccidentModal(true);
  };

  return (
    <div>
      <Button type="primary" onClick={() => handleShowCreateCarModal(null)}>
        Create New Car
      </Button>
      {cars.map((car) => (
        <Card className="card" title={`${car.model.manufacturer} ${car.model.name} ${car.year}`}>
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
                <Button
                  type="link"
                  onClick={() => handleShowAccidentModal(car)}
                >
                  Show accident reports
                </Button>
              </span>
            ) : (
              <span>
                <CheckOutlined className="good" /> No Accident Reports
              </span>
            )}
          </p>
          <CarDashBoardButtons
            car={car}
            handleShowCreateCarModal={handleShowCreateCarModal}
            handleShowCreateAccidentModal={handleShowCreateAccidentModal}
            fetchData={fetchData}
          />
        </Card>
      ))}
      ;
      <CarAccidentModal
        car={selectedCar}
        showAccidentModal={showAccidentModal}
        setShowAccidentModal={setShowAccidentModal}
      />
      <CreateCar
        showCreateCarModal={showCreateCarModal}
        setShowCreateCarModal={setShowCreateCarModal}
        features={features}
        models={models}
        car={selectedCar}
        fetchData={fetchData}
      />
      <CreateAccident
        showCreateAccidentModal={showCreateAccidentModal}
        setShowCreateAccidentModal={setShowCreateAccidentModal}
        car={selectedCar}
        fetchData={fetchData}
      />
    </div>
  );
};

export default CarDashboard;
