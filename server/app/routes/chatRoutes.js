const express = require("express");
const {
  accessChat,
  fetchChats,

} = require("../controllers/chatControllers");

const router = express.Router();

router.route("/addInChatList").post( accessChat);
router.route("/chatlist").post( fetchChats);


module.exports = router;
