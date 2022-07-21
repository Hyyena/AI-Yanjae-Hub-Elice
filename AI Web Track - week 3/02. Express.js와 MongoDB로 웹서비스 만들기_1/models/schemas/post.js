const { Schema } = require("mongoose");
const shortId = require("./type/ShortId");

module.exports = new Schema(
    {
        shortId,
        title: String,
        content: String,
    },
    {
        timestamps: true,
    }
);
