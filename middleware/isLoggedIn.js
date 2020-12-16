const isLoggedIn = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send('로그인이 필요한 기능입니다.');
  }
  return next();
};

export default isLoggedIn;
