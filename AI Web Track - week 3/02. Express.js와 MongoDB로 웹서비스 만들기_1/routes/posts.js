const { Router } = require("express");
const { Post } = require("./../models");

const router = Router();

router.get("/", async (req, res, next) => {
    const posts = await Post.find({});
    res.json(posts);
});

router.post("/insert", async (req, res, next) => {
    const { title, content } = req.body;
    try {
        await Post.create({
            title,
            content,
        });
        res.json({
            result: "작성 완료",
        });
    } catch (e) {
        next(e);
    }
});

module.exports = router;
