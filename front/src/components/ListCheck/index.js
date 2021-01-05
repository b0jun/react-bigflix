import React, { useEffect } from 'react';
import { GoPlus, GoCheck } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { addMylist, checkMylist, removeMylist } from '../../redux/reducers/mylistReducer';
import CircleButton from '../Common/CircleButton';

const ListCheck = ({ contentId, isMovie }) => {
  const dispatch = useDispatch();
  const { saved } = useSelector((state) => state.mylist);
  useEffect(() => {
    dispatch(
      checkMylist({
        contentId,
        isMovie,
        userInfo: JSON.parse(localStorage.getItem('user'))._id,
      })
    );
  }, [dispatch, contentId, isMovie]);

  const onAddMylist = () => {
    dispatch(
      addMylist({
        contentId,
        isMovie,
        userInfo: JSON.parse(localStorage.getItem('user'))._id,
      })
    );
  };

  const onRemoveMylist = () => {
    dispatch(
      removeMylist({
        contentId,
        isMovie,
        userInfo: JSON.parse(localStorage.getItem('user'))._id,
      })
    );
  };
  return saved ? (
    <CircleButton onClick={onRemoveMylist}>
      <GoCheck />
    </CircleButton>
  ) : (
    <CircleButton onClick={onAddMylist}>
      <GoPlus />
    </CircleButton>
  );
};

export default ListCheck;
