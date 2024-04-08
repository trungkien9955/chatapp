const express = require("express");
const { getStats } = require("../Controllers/StatsController");
const router = express.Router();
router.post("/get-stats", getStats);

module.exports = router