const mongoose = require("mongoose");
const PostSchema = require("./schemas/board");

// 모델 생성
exports.Post = mongoose.model("Post", PostSchema);
