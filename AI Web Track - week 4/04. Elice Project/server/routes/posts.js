const asyncHandler = require("./../utils/asyncHandler");
const { Router } = require("express");
const { Post } = require("./../models");
const { User } = require("./../models");

const router = Router();

// 게시글 리스트
router.get("/", async (req, res, next) => {
  // const posts = await Post.find({}).populate("author");
  // res.json(posts);

  // let page = 1;
  // let perPage = 6;

  // page가 1보다 작다면 오류 처리
  if (req.query.page < 1) {
    next("Please enter a number greator than 1");
    return;
  }

  // req.query.page가 "undefiend" or "null"이면 1을 넣어라. 즉, default = 1
  const page = Number(req.query.page || 1);

  // req.query.perPage가 "undefiend" or "null"이면 6을 넣어라. 즉, default = 6
  const perPage = Number(req.query.perPage || 6);

  const total = await Post.countDocuments({});

  // 페이지네이션
  const posts = await Post.find({})
    .sort({ createdAt: -1 }) // 마지막으로 작성된 게시글을 첫 번째 인덱스로 가져옴
    .skip(perPage * (page - 1)) // ex) 2 페이지라면 5번부터
    .limit(perPage) //                 6개씩 가져옴
    .populate("author");

  const totalPage = Math.ceil(total / perPage);

  res.json({ posts, totalPage });
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
