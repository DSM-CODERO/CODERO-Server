require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { Transport } = require('../config/email');

const signup = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    await User.create({
      email,
      password,
      username,
    });
    res.status(200).json({
      message: '회원가입 성공',
    });
  } catch (err) {
    res.status(409).json({
      message: '중복된 이메일 또는 닉네임',
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const secretKey = req.app.get('jwt-secret');
  const jwtSecret = req.app.get('refresh-secret');
  console.log(email, password, secretKey, jwtSecret);

  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (user.password === password) {
      const accessToken = jwt.sign(
        {
          user_id: user.user_id,
          email: user.email,
          username: user.username,
        },
        secretKey,
        {
          expiresIn: '1h',
        },
      );

      const refreshtoken = jwt.sign(
        {
          user_id: user.user_id,
          email: user.email,
          username: user.username,
        },
        jwtSecret,
      );

      res.status(200).json({
        message: '로그인 성공',
        accessToken,
        refreshtoken,
      });
    } else {
      res.status(403).json({
        message: '로그인 실패',
      });
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({
      message: '존재하지 않는 유저',
    });
  }
};

const viewMyPage = async (req, res) => {
  try {
    const { username } = req.decoded;
    const { email } = req.decoded;

    res.status(200).json({
      username,
      email,
    });
    console.log(username, email);
  } catch (err) {
    res.status(400).json({
      message: '등록되지 않는 유저 정보',
    });
    console.error(err);
  }
};

const verifyEmail = async (req, res) => {
  const generateRandom = (min, max) => {
    const ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return ranNum;
  };

  const number = generateRandom(111111, 999999);

  const email = req.body;
  const mailOptions = {
    from: process.env.USEREMAIL,
    to: email,
    subject: '[CODERO]인증 관련 이메일 입니다',
    text: `오른쪽 숫자 6자리를 입력해주세요 : ${number}`,
  };

  await Transport.sendMail(mailOptions, error => {
    if (error) {
      res.json({ msg: 'err' });
    } else {
      res.json({ msg: `success${number}` });
    }
    Transport.close();
  });
};

module.exports = {
  signup,
  login,
  verifyEmail,
  viewMyPage,
};
