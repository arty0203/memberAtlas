const express = require("express");
const router = express.Router();

const memberController = require("./../controllers/memberController");

router.route("/").get(memberController.getAllMembers);

router.route("/add").post(memberController.addMember);

router.route("/:id").get(memberController.getMemberById).put(memberController.editdMember).delete(memberController.deleteMember);

module.exports = router;
