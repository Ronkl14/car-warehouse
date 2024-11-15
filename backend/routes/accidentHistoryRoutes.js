const express = require('express');
const router = express.Router();
const accidentHistoryController = require("../controllers/accidentHistoryController")

router.get('/:id', accidentHistoryController.getAccidentById)
router.get('/car/:carId', accidentHistoryController.getAccidentsByCarId);  
router.post('/', accidentHistoryController.createAccidentByCarId);  
router.put('/:id', accidentHistoryController.updateAccidentById);  
router.delete('/:id', accidentHistoryController.deleteAccidentById);
router.delete('/car/:carId', accidentHistoryController.deleteAllAccidentsByCarId)

module.exports = router;