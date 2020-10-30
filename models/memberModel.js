const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
  id: { type: String, required: true, index: { unique: true } },
  name: { type: String, required: true },
  email: String,
  phone: String,
});

module.exports = mongoose.model("member", MemberSchema);
