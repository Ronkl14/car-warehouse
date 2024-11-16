const { Feature } = require("../models");

exports.getAllFeatures = async (req, res) => {
  try {
    const features = await Feature.findAll();
    res.status(200).json(features);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving features", error });
  }
};