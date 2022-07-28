const mongoose = require("mongoose");
const PostSchema = require("./schemas/Post");
const UserScema = require("./schemas/User");

exports.Post = mongoose.model("Post", PostSchema);
exports.User = mongoose.model("User", UserScema);
