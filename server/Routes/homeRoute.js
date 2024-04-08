const express = require("express")
const { getDefaultHomeUsers, getInitialStrangers, updateNotiAsRead, getStranger, saveDCityId_Filter, saveFilter, fetchNewNotiCount, fetchNoti, removeMessageNoti } = require("../Controllers/homeController")
const router = express.Router()
// router.post("/get-default-home-users", getDefaultHomeUsers);
router.get("/get-default-home-users/:cityId", getDefaultHomeUsers);
router.post("/get-initial-strangers", getInitialStrangers);
router.post("/update-noti-as-read", updateNotiAsRead);
router.post("/remove-message-noti", removeMessageNoti)
router.post("/get-stranger", getStranger);
router.post("/save-dcityid-filter", saveDCityId_Filter);
router.post("/save-filter", saveFilter);
router.post("/fetch-new-noti-count", fetchNewNotiCount);
router.post("/fetch-noti", fetchNoti);

module.exports = router