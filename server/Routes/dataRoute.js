const express = require("express")
const { getCities, addCityId, findUser, addHobbies, updateHobbies, addHobbyField } = require("../Controllers/dataController")
const router = express.Router()
router.get("/cities", getCities)
router.get("/add-city-id", addCityId)
router.get("/add-hobby-field", addHobbyField)
router.get("/find-user", findUser)
router.post("/add-hobbies", addHobbies);
router.get("/update-hobbies", updateHobbies);

module.exports = router