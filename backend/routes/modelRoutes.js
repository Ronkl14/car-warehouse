const express = require('express');
const router = express.Router();
const modelController = require('../controllers/modelController');

router.get('/', modelController.getAllModels);  

module.exports = router;