const { Car, Model, Feature, AccidentHistory } = require("../models");

exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll({
      include: [
        {
          model: Model,
          as: "model",
          attributes: ["id", "manufacturer", "name"],
        },
        {
          model: Feature,
          as: "features", 
          attributes: ["id", "name"], 
          through: { attributes: [] },
        },
        {
          model: AccidentHistory,
          attributes: ["id", "date", "description", "costs"],
          as: "accidents",
        },
      ],
    });
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving cars", error });
  }
};

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

exports.createCar = async (req, res) => {
  try {
    const { model_id, year, price, mileage } = req.body;
    const car = await Car.create({ model_id, year, price, mileage });
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({ message: "Error creating car", error });
  }
};

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

exports.deleteCar = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }
    await car.destroy();
    res.status(200).json({ message: "Car Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting car", error });
  }
};
