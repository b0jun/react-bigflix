import express from 'express';
import Mylist from '../../models/mylist';

const router = express.Router();

router.post('/check', async (req, res, next) => {
  const { userInfo, isMovie, contentId } = req.body;
  if (!userInfo || !contentId || isMovie === null) {
    return res.status(400).send('잘못된 요청입니다.');
  }
  try {
    const list = await Mylist.findOne({
      userInfo,
      isMovie,
      contentId,
    });
    let saved = false;
    if (list) {
      saved = true;
    }
    res.status(200).json({ saved });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/add', async (req, res, next) => {
  const { userInfo, isMovie, contentId } = req.body;
  if (!userInfo || !contentId || isMovie === null) {
    return res.status(400).send('리스트 저장에 실패했습니다.');
  }
  try {
    const exList = await Mylist.findOne({ userInfo, isMovie, contentId });
    if (exList) {
      return res.status(403).send('이미 추가된 리스트입니다.');
    }
    const list = new Mylist({
      userInfo,
      isMovie,
      contentId,
    });
    await list.save();
    res.status(201).json({ success: true });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/remove', async (req, res, next) => {
  const { userInfo, isMovie, contentId } = req.body;
  if (!userInfo || !contentId || isMovie === null) {
    return res.status(400).send('리스트 삭제에 실패했습니다.');
  }
  try {
    await Mylist.findOneAndDelete({
      userInfo,
      isMovie,
      contentId,
    });
    res.status(201).json({ success: true });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/lists', async (req, res, next) => {
  const { userInfo } = req.body;
  try {
    const mylist = await Mylist.find({ userInfo }, { userInfo: 0 });
    if (!mylist) {
      return res.status(400).send('내가 찜한 콘텐츠가 없습니다.');
    }
    res.status(200).json({ mylist });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

export default router;
