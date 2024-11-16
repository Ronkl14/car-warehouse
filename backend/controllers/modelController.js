const { Model } = require("../models");

exports.getAllModels = async (req, res) => {
  try {
    const models = await Model.findAll();
    res.status(200).json(models);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving models", error });
  }
};