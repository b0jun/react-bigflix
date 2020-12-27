import jwt from 'jsonwebtoken';
import config from '../config';

const { JWT_SECRET } = config;

const jwtMiddleware = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).send('로그인 토큰이 만료되었습니다.');
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = {
      _id: decoded._id,
      email: decoded.email,
      nickname: decoded.nickname,
    };

    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp - now < 60 * 60 * 24 * 3.5) {
      const user = await User.findByEmail(decoded._id);
      const token = user.generateToken();
      res.cookie('access_token', token, {
        maxAge: 1000 * 60 * 60 * 24 * 7, //7d
        httpOnly: true,
      });
    }
    return next();
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export default jwtMiddleware;
