const { Schema } = require("mongoose");
const shortId = require("./type/shortId")

module.exports = new Schema(
    {
        title: String,
        content: String,
    },
    {
        timestamps: true,
    }
);
