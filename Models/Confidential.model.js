const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConfidentialSchema = new Schema(
  {
    password: { type: String, required: true }
  }
);

const Confidential = mongoose.model("confidential", ConfidentialSchema);

module.exports = Confidential;
