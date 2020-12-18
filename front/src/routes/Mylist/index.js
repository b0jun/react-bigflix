import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

const MylistRoute = ({ history }) => {
  const { userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!userInfo) {
      history.replace('/');
    }
  }, [userInfo, history]);
  return <div>Mylist</div>;
};

export default withRouter(MylistRoute);
