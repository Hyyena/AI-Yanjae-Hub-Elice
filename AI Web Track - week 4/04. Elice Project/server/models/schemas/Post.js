const { Schema } = require("mongoose");
const shortId = require("./type/ShortId");

module.exports = new Schema(
    {
        shortId,
        title: String,
        content: String,
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
