import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { GoPlus, GoCheck } from 'react-icons/go';
import { addMylist, checkMylist, removeMylist } from '../../redux/reducers/mylistReducer';
import { LOAD_MYLIST_REQUEST } from '../../redux/type';
import CircleButton from '../Common/CircleButton';

const ListCheck = ({
  contentId,
  isMovie,
  history: {
    location: { pathname },
  },
}) => {
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
    if (pathname === '/mylist') {
      setTimeout(() => {
        dispatch({
          type: LOAD_MYLIST_REQUEST,
          data: {
            userInfo: JSON.parse(localStorage.getItem('user'))._id,
          },
        });
      }, 200);
    }
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

ListCheck.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }),
  }),
  contentId: PropTypes.number.isRequired,
  isMovie: PropTypes.bool.isRequired,
};

export default withRouter(ListCheck);
