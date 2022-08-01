const { Router } = require("express");
const { Post } = require("./../models");
const asyncHandler = require("./../utils/asyncHandler");
const { User } = require("./../models");

const router = Router();

router.get("/", async (req, res, next) => {
  const posts = await Post.find({}).populate("author");
  res.json(posts);
});

router.post("/", async (req, res, next) => {
  const { img, title, content, email } = req.body;
  console.log(img, title, content, email);
  try {
    const authData = await User.findOne({ email });

    await Post.create({
      img,
      title,
      content,
      author: authData,
    });

    res.json({
      result: "작성 완료",
    });
  } catch (e) {
    next(e);
  }
});

router.get("/:shortId/delete", async (req, res, next) => {
  const { shortId } = req.params;
  // console.log(shortId);
  try {
    await Post.deleteOne({ shortId });

    res.json({
      result: "삭제 완료",
    });
  } catch (e) {
    next(e);
  }
});

router.get("/:shortId/find", async (req, res, next) => {
  let { shortId } = req.params;
  // console.log(shortId);

  try {
    let data = await Post.findOne({ shortId });
    // console.log(data);
    res.json(data);
  } catch (e) {
    next(e);
  }
});

router.post("/:shortId/update", async (req, res, next) => {
  let { shortId } = req.params;
  let { title, content } = req.body;

  // console.log(shortId, title, content);

  try {
    await Post.updateOne({ shortId }, { title, content });

    res.json({
      result: "수정 완료",
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
