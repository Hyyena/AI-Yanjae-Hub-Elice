const { Router } = require("express");
const router = Router();
const asyncHandler = require("./../utils/asyncHandler");
const crypto = require("crypto");
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const jwtConfig = require("./../config/jwtConfig");
const nodeMailer = require("nodemailer");

router.post(
  "/signUp",
  asyncHandler(async (req, res, next) => {
    const { email, password, name } = req.body;
    // console.log(email, password, name);

    let hashPassword = passwordHash(password);
    // console.log(hashPassword);

    const checkEmail = await User.findOne({ email });

    if (checkEmail) {
      // throw new Error("이미 가입된 이메일입니다.");\
      res.status(500);
      res.json({
        error: "이미 가입된 이메일입니다.",
      });
      return;
    }

    await User.create({
      email,
      password: hashPassword,
      name,
    });

    res.json({
      result: "회원가입이 완료되었습니다. 로그인을 해주세요.",
    });
  }),
);

router.post(
  "/signIn",
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    // console.log(email, password);

    let hashPassword = passwordHash(password);
    // console.log(hashPassword);

    const checkEmail = await User.findOne({ email });

    if (!checkEmail) {
      res.status(401);
      res.json({
        fail: "존재하지 않는 이메일입니다.",
      });
      return;
    }

    // if (hashPassword !== checkEmail.password) {
    //     res.status(401);
    //     res.json({
    //         fail: "이메일 또는 비밀번호가 일치하지 않습니다.",
    //     });
    //     return;
    // }

    jwt.sign(
      {
        email: email,
        name: checkEmail.name,
      },
      jwtConfig.secret,
      {
        expiresIn: "1d", // ex) 1y, 1d, 2h, 1m, 5s
      },
      (err, token) => {
        if (err) {
          res.status(401).json({
            status: false,
            message: "로그인을 해주세요.",
          });
        } else {
          res.json({
            status: true,
            accessToken: token,
            email: email,
            name: checkEmail.name,
          });
        }
      },
    );
  }),
);

router.post(
  "/find/password",
  asyncHandler(async (req, res, next) => {
    let { email } = req.body;
    let user = await User.findOne({ email });
    let myEmail = "sjtxm123@gmail.com";

    let transporter = nodeMailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: myEmail,
        pass: "txkrpfnvnbaonznx",
      },
    });

    const randomPassword = randomPw();
    const hashRandomPassword = passwordHash(randomPassword);

    const checkEmail = await User.findOne({ email });
    if (checkEmail.status !== null || checkEmail.status !== undefined) {
      if (checkEmail.status === true) {
        console.log("비밀번호 재생성 페이지로 리다이렉트");
      }
    }

    await User.findOneAndUpdate(
      {
        shortId: user.shortId,
      },
      {
        password: hashRandomPassword,
      },
    );

    let info = await transporter.sendMail({
      from: `"Admin" <${myEmail}>`,
      to: user.email,
      subject: "Rest Password By Admin",
      html: `<b>Password : ${randomPassword}</b>`,
    });

    console.log(info.messageId);
    res.json({ result: "이메일 전송 완료" });
  }),
);

const randomPw = () => {
  return Math.floor(Math.random() * 10 ** 8)
    .toString()
    .padStart("0", 8);
};

const passwordHash = (password) => {
  return crypto.createHash("sha1").update(password).digest("hex");
};

module.exports = router;
