const { AccidentHistory } = require("../models");

exports.getAccidentById = async (req, res) => {
  try {
    const accident = await AccidentHistory.findByPk(req.params.id);
    if (!accident) {
      return res.status(404).json({ message: "Accident report not found" });
    }
    res.status(200).json(accident);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving accident report", error });
  }
};

exports.getAccidentsByCarId = async (req, res) => {
  try {
    const accidents = await AccidentHistory.findAll({
      where: {
        car_id: req.params.carId,
      },
    });
    if (!accidents.length) {
      return res
        .status(404)
        .json({ message: "No accident reports found for car" });
    }
    return res.status(200).json(accidents);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving accident reports", error });
  }
};

exports.createAccidentByCarId = async (req, res) => {
  try {
    const { car_id, date, description, costs } = req.body;
    const accident = await AccidentHistory.create({
      car_id,
      date,
      description,
      costs,
    });
    res.status(201).json(accident);
  } catch (error) {
    res.status(500).json({ message: "Error creating accident report", error });
  }
};

exports.updateAccidentById = async (req, res) => {
  try {
    const accident = await AccidentHistory.findByPk(req.params.id);
    if (!accident) {
      return res.status(404).json({ message: "Accident report not found" });
    }
    const { car_id, date, description, costs } = req.body;
    await AccidentHistory.update({ car_id, date, description, costs });
    res.status(200).json(accident);
  } catch (error) {
    res.status(500).json({ message: "Error updating accident report", error });
  }
};

exports.deleteAccidentById = async (req, res) => {
  try {
    const accident = await AccidentHistory.findByPk(req.params.id);
    if (!accident) {
      return res.status(404).json({ message: "Accident report not found" });
    }
    await accident.destroy();
    res.status(200).json({ message: "Accident report deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting accident report", message });
  }
};

exports.deleteAllAccidentsByCarId = async (req, res) => {
  try {
    const numOfAccidentsDeleted = await AccidentHistory.destroy({
      where: {
        car_id: req.params.carId,
      },
    });
    if (numOfAccidentsDeleted > 0) {
      return res
        .status(200)
        .json({ message: `${numOfAccidentsDeleted} accident reports deleted` });
    } else {
      return res
        .status(404)
        .json({ message: "No accident reports found for car" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting accident reports" });
  }
};
