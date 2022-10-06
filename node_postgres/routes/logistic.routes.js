const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(cors());
const logisticController = require('../controllers/logistic.controllers')

router.post('/logistic', logisticController.createRow)
router.get('/logistic', logisticController.getRow)
router.put('/logistic', logisticController.updateRow)
router.delete('/logistic/:id', logisticController.deleteRow)


module.exports = router