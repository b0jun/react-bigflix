import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_TV_REQUEST } from '../../redux/type';

const TVRoute = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_TV_REQUEST,
    });
  }, [dispatch]);
  const { tvResults } = useSelector((state) => state.contents);
  console.log(tvResults);

  return <div>TV</div>;
};

export default TVRoute;
