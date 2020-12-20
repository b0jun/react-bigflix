import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_HOME_REQUEST } from '../../redux/type';
const HomeRoute = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_HOME_REQUEST,
    });
  }, [dispatch]);
  const { homeResults } = useSelector((state) => state.contents);
  return <div>Home</div>;
};

export default HomeRoute;
