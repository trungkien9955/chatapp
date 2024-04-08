const express = require("express");
const {createChat, findUserChats, findChat, createMessage, getMessages, addMessageNoti, removeMessageNoti, getLastMessageTime, createMatch, fetchChats, removeMatch, fetchMessageNoti} = require("../Controllers/chatController");
const router = express.Router();
router.post("/create-chat", createChat);
router.post("/create-match", createMatch);
router.post("/remove-match", removeMatch);
router.get("/:userId", findUserChats);
router.get("/find/:firstId/:secondId", findChat);
router.post("/save-message", createMessage)
router.get("/get-messages/:chatId", getMessages)
router.post("/add-message-noti", addMessageNoti)
// router.post("/remove-message-noti", removeMessageNoti)
router.post("/get-last-message-time", getLastMessageTime)
router.post("/fetch-chats", fetchChats)
router.post("/fetch-message-noti", fetchMessageNoti)

module.exports = router;