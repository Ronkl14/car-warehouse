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
    const { model_id, year, price, mileage, feature_ids } = req.body;

    if (feature_ids) {
      const features = await Feature.findAll({
        where: { id: feature_ids },
      });
      if (features.length !== feature_ids.length) {
        return res.status(400).json({ message: "Invalid feature IDs" });
      }
    }

    const car = await Car.create({ model_id, year, price, mileage });

    if (feature_ids && feature_ids.length > 0) {
      await car.setFeatures(feature_ids);
    }

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

    const { model_id, year, price, mileage, feature_ids } = req.body;

    if (feature_ids) {
      const features = await Feature.findAll({
        where: { id: feature_ids },
      });

      if (features.length !== feature_ids.length) {
        return res.status(400).json({ message: "Invalid feature IDs" });
      }

      await car.setFeatures(feature_ids);
    }

    await car.update({ model_id, year, price, mileage });

    const updatedCar = await Car.findByPk(req.params.id, {
      include: [{ model: Feature, as: "features" }],
    });

    res.status(200).json(updatedCar);
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
