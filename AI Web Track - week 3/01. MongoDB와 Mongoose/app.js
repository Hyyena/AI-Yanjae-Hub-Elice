const mongoose = require("mongoose");

const { Post } = require("./models");

// 데이터베이스 연결
mongoose.connect("mongodb://localhost:27017/myapp");

mongoose.connection.on("connected", () => {
    console.log("DB Connected");
});

mongoose.connection.on("disconnected", () => {
    console.log("DB Disconnected");
});

async function main() {
    await Post.create({
        title: "제목3",
        content: "내용3",
    });
}

// main();

async function findList() {
    return await Post.find({});
}

// findList().then((res) => {
//     console.timeLog(res);
// });

async function findItem() {
    return await Post.find({ title: "제목2" });
}

// findItem().then((res) => {
//     console.log(res);
// });

/*
id 값을 기준으로 내용 수정

일반적으로 MongoDB 자체 id가 아닌
code-level에서 부여한 id 값을 기준으로
findOneAndUpdate를 사용
*/
async function changeItem() {
    return await Post.findByIdAndUpdate(
        {
            _id: "62d4e16a8c340e1850bfae7d",
        },
        {
            title: "수정2",
        }
    );
}

changeItem().then((res) => {
    console.log(res);
});

async function deleteFunc() {
    await Post.deleteOne({
        _id: "62d4e167368ba2ee9636dac8",
    });
}

// deleteFunc().then((res) => {
//     console.log(res);
// });
