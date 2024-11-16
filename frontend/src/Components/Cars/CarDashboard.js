import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCars } from "../../store/slices/carsSlice.js";
import { fetchStaticData } from "../../store/slices/staticDataSlice";
import { Card, Button } from "antd";
import { CheckOutlined, WarningOutlined } from "@ant-design/icons";
import CarDashBoardButtons from "./CarDashBoardButtons.js";
import CarAccidentModal from "./CarAccidentModal.js";
import CreateCar from "./CreateCar.js";
import CreateAccident from "./CreateAccident.js";

const CarDashboard = () => {
  const [showAccidentModal, setShowAccidentModal] = useState(false);
  const [showCreateCarModal, setShowCreateCarModal] = useState(false);
  const [showCreateAccidentModal, setShowCreateAccidentModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.cars);
  const carStatus = useSelector((state) => state.cars.status);
  const staticData = useSelector((state) => state.staticData);

  useEffect(() => {
    if (carStatus === "idle") {
      dispatch(fetchCars());
    }
  }, [carStatus, dispatch]);

  useEffect(() => {
    if (staticData.status === "idle") {
      dispatch(fetchStaticData());
    }
  }, [staticData.status, dispatch]);

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
        <Card
          className="card"
          title={`${car.model.manufacturer} ${car.model.name} ${car.year}`}
        >
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
        car={selectedCar}
      />
      <CreateAccident
        showCreateAccidentModal={showCreateAccidentModal}
        setShowCreateAccidentModal={setShowCreateAccidentModal}
        car={selectedCar}
      />
    </div>
  );
};

export default CarDashboard;
