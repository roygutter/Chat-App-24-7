const express = require("express");
const {
  sendMessage,
  allMessages,
} = require("../controllers/messageControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();
//send message
router.route("/").post(protect, sendMessage);
// get the messages
router.route("/:chatId").get(protect, allMessages);

module.exports = router;
