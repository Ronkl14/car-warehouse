import { useEffect, useState } from "react";
import { getAllCars } from "../Services/api.js";
import { Card, Button } from "antd";
import { CheckOutlined, WarningOutlined } from "@ant-design/icons";

const CarDashboard = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const carList = await getAllCars();
        setCars(carList);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCars();
  }, []);

  useEffect(() => {
    console.log(cars);
  }, [cars]);

  return cars.map((car) => (
    <Card title={`${car.model.manufacturer} ${car.model.name} ${car.year}`}>
      <p>Mileage: {car.mileage} Km</p>
      <p>Price: {car.price}$</p>
      <p>
        <span className="features-label">Features:</span>
        <ul className="inline-bullet-list">
          {car.features.map((feature, index) => (
            <li key={index} className="inline-bullet-item">
              ✪ {feature.name}
            </li>
          ))}
        </ul>
      </p>
      <p>
        {car.accidents.length ? (
          <span>
            <WarningOutlined style={{ color: "red" }} />{" "}
            <Button type="link">Show accident reports</Button>
          </span>
        ) : (
          <span>
            <CheckOutlined style={{ color: "green" }} /> No Accident Reports
          </span>
        )}
      </p>
    </Card>
  ));
};

export default CarDashboard;
