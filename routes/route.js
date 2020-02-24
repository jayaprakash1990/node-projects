const express = require("express");
const router = express.Router();

const weatherController = require("../controller/weather-controller");
//weatherApp
router.get("/forecast/:city", weatherController.getWeatherReport);
router.get("/", weatherController.getDetail);

module.exports = router;