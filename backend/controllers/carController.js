const { Car, Model } = require("../models"); // Ensure Model is imported too

// Get all cars
exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll({});
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving cars", error });
  }
};

// Get a car by ID
exports.getCarById = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving car", error });
  }
};

// Create a new car
exports.createCar = async (req, res) => {
  try {
    const { name, model, year, price } = req.body;
    const car = await Car.create({ name, model, year, price });
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({ message: "Error creating car", error });
  }
};

// Update a car by ID
exports.updateCar = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }
    const { name, model, year, price } = req.body;
    await car.update({ name, model, year, price });
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: "Error updating car", error });
  }
};

// Delete a car by ID
exports.deleteCar = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }
    await car.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: "Error deleting car", error });
  }
};
