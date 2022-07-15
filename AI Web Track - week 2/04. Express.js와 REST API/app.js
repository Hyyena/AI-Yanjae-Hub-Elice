const express = require("express");
const app = express();
const routerNotes = require("./routes/notes");

// JSON 데이터 처리 미들웨어
app.use(express.json());

app.use("/notes", routerNotes);

// 정의되지 않은 라우팅에 404 오류 처리
app.use((req, res, next) => {
    res.status(404);
    res.send({
        result: "fail",
        error: `Page not found ${(req, path)}`,
    });
});

// 오류 처리 미들웨어
app.use((err, req, res, next) => {
    res.status(500);
    res.json({
        result: "fail",
        error: err.message,
    });
});

app.listen(3030, () => {
    console.log("server staaaaaaaaaaaart");
});
