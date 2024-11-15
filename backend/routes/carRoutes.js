const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

// Define the routes and link them to the controller methods
router.get('/', carController.getAllCars);  // GET all cars
router.get('/:id', carController.getCarById);  // GET a car by ID
router.post('/', carController.createCar);  // POST a new car
router.put('/:id', carController.updateCar);  // PUT to update a car by ID
router.delete('/:id', carController.deleteCar);  // DELETE a car by ID

module.exports = router;
