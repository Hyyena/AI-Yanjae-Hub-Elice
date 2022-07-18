// 스키마 정의
const { Schema } = require("mongoose");

const PostSchema = new Schema(
    {
        title: String,
        content: String,
    },
    {
        timestamps: true,
    }
);

module.exports = PostSchema;
