import express from 'express';
import jwtMiddleware from '../../middleware/jwtMiddleware';

import User from '../../models/user';

const router = express.Router();

// 회원가입
// POST /api/auth/register
router.post('/register', async (req, res, next) => {
  const { nickname, email, password } = req.body;
  if (!nickname || !email || !password) {
    return res.status(400).send('모든 필드를 채워주세요');
  }
  try {
    const exUser = await User.findOne({ email });
    if (exUser) {
      return res.status(403).send('이미 사용중인 아이디입니다.');
    }
    const user = new User({ nickname, email });
    await user.setPassword(password);
    await user.save();
    const token = user.generateToken();
    res.cookie('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, //7d
      httpOnly: true,
    });
    res.status(200).json(user.serialize());
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 로그인
// POST /api/auth/login
router.post('/login', async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send('모든 필드를 채워주세요');
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send('존재하지않는 아이디입니다.');
    }
    const valid = await user.checkPassword(password);
    if (!valid) {
      return res.status(401).send('비밀번호가 일치하지않습니다.');
    }

    const token = user.generateToken();
    res.cookie('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, //7d
      httpOnly: true,
    });
    res.status(200).json(user.serialize());
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 로그인 체크
// GET /api/auth/check
router.get('/check', jwtMiddleware, (req, res, next) => {
  const { user } = req;
  if (!user) {
    return res.status(401).send('유저가 존재하지 않습니다.');
  }
  res.status(200).json(user);
});

// 로그아웃
// POST /api/auth/logout
router.post('/logout', (req, res) => {
  res.clearCookie('access_token');
  res.status(204);
});
export default router;
