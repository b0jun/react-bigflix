import express from 'express';
import jwtMiddleware from '../../middleware/jwtMiddleware';

import User from '../../models/user';

const router = express.Router();

// 회원가입
// POST /api/auth

router.post('/', async (req, res, next) => {
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

export default router;
