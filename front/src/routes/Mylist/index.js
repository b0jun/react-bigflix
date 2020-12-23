import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { MarginContentsBlock } from '../../components/Common/GlobalStyles';
import SubHeader from '../../components/SubHeader';

const MylistRoute = ({ history }) => {
  const { userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!userInfo) {
      history.replace('/');
    }
  }, [userInfo, history]);
  return (
    <>
      <SubHeader>
        <div className="sub-title">내가 찜한 콘텐츠</div>
      </SubHeader>
      <MarginContentsBlock>Mylist</MarginContentsBlock>
    </>
  );
};

export default withRouter(MylistRoute);
