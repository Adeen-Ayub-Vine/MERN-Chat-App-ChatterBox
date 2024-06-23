const express = require("express");
const { protect } = require("../Middleware/authMiddleware");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroupChat,
  addToGroupChat,
  removeFromGroupChat,
} = require("../controllers/chatControllers");

const router = express.Router();

router.route("/").post(protect, accessChat); //one-on-one chat creation
router.route("/").get(protect, fetchChats); //fetch all chats for logged in user
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroupChat);
router.route("/groupadd").put(protect, addToGroupChat);
router.route("/groupremove").put(protect, removeFromGroupChat);

module.exports = router;
