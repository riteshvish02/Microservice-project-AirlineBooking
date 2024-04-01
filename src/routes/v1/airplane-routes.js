const express = require('express');
const {Airplanecontroller} = require('../../controllers');
const {Airplanemiddleware} = require("../../middlewares")

const router = express.Router();

router.post("/",
  Airplanemiddleware.validaterequest,
  Airplanecontroller.createAirplane
)

router.get("/:id",
  Airplanecontroller.getAirplane
)

module.exports = router;