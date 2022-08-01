const { Schema } = require("mongoose");
const shortId = require("./type/ShortId");

module.exports = new Schema(
  {
    shortId,
    email: String,
    password: String,
    name: String,
    status: false,
  },
  {
    timestamps: true,
  },
);
