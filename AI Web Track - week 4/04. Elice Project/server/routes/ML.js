const { Router } = require("express");
const router = Router();

router.get("/download", (req, res, next) => {
  const file = "/my-model.json";
  res.download(file);
});

module.exports = router;
