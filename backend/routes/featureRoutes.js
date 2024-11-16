const express = require("express");
const router = express.Router();
const featureController = require("../controllers/featureController");

router.get("/", featureController.getAllFeatures);

module.exports = router;
