const express = require("express");
const {registerUser, loginUser, findUser, getUsers, addData, addDistricts, addWards, getAllProducts, verifyEmail, test, loginUser2, handleRefresh, handleRefreshFormData, fetchFans, fetchMatches, fetchLikedStrangers, getMessageNoti} = require("../Controllers/userController");
const verifyJWT = require("../Middlewares/verifyJWT");
const resHeaderMdw = require("../Middlewares/ResHeaderMdw");
const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/refresh", handleRefresh);
router.post("/refresh-form-data", handleRefreshFormData);
router.post("/login2",  loginUser2);
router.get("/find/:userId", findUser);
router.get("/", getUsers);
router.post("/add-data", addData);
router.post("/add-districts", addDistricts);
router.post("/add-wards", addWards);
router.get("/products", getAllProducts);
router.get("/verify/:id", verifyEmail);
router.post("/verify-email", verifyEmail);
router.post("/fetch-fans", fetchFans);
router.post("/fetch-matches", fetchMatches);
router.post("/fetch-liked-strangers", fetchLikedStrangers);
router.post("/fetch-message-noti", getMessageNoti);


module.exports = router;