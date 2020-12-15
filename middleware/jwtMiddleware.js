import jwt from 'jsonwebtoken';
import config from '../config';

const { JWT_SECRET } = config;

const jwtMiddleware = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).send('토큰이 없습니다.');
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = {
      _id: decoded._id,
      email: decoded.email,
    };
    return next();
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export default jwtMiddleware;
