const MemberModel = require("../models/memberModel");

const controllers = {};

// getall
controllers.getAllMembers = async function (req, res) {
  try {
    const members = await MemberModel.find({});
    res.status(200).json({
      status: "success",
      results: members.length,
      data: { members },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// get by id
controllers.getMemberById = async function (req, res) {
  try {
    const id = req.params.id;
    const members = await MemberModel.findOne({ id });
    res.status(200).json({
      status: "success",
      results: members.length,
      data: { members },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// add new member
controllers.addMember = async function (req, res) {
  try {
    const { id, name, email, phone } = req.body;

    const newMember = new MemberModel({ id, name, email, phone });
    const member = await MemberModel.create(newMember);
    res.status(200).json({
      status: "success",
      results: member.length,
      data: { member },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

//edit member
controllers.editdMember = async function (req, res) {
  try {
    const id = req.params.id;
    const { name, email, phone } = req.body;

    const member = await MemberModel.findOneAndUpdate({ id }, { name, email, phone });
    res.status(200).json({
      status: "success",
      results: member.length,
      data: { member },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// delete member
controllers.deleteMember = async function (req, res) {
  try {
    const id = req.params.id;

    const members = await MemberModel.findOneAndDelete({ id });
    res.status(200).json({
      status: "success",
      results: members.length,
      data: { members },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

module.exports = controllers;
