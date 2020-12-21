import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/Common/Spinner';
import { LOAD_HOME_REQUEST } from '../../redux/type';
const HomeRoute = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_HOME_REQUEST,
    });
  }, [dispatch]);
  const { homeResults, isLoading } = useSelector((state) => state.contents);
  if (isLoading) {
    return <Spinner />;
  }
  return <div>Home</div>;
};

export default HomeRoute;
