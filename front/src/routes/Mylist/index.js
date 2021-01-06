import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../../components/Common/Spinner';
import Poster from '../../components/Contents/Poster';
import Wrapper from '../../components/Contents/Wrapper';
import NormalMessage from '../../components/Message/NormalMessage';
import SubHeader from '../../components/SubHeader';
import { LOAD_MYLIST_REQUEST } from '../../redux/type';

const MylistRoute = ({ history }) => {
  const { userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!userInfo) {
      history.replace('/');
    }
  }, [userInfo, history]);

  const dispatch = useDispatch();

  const fetchList = useCallback(() => {
    dispatch({
      type: LOAD_MYLIST_REQUEST,
      data: {
        userInfo: JSON.parse(localStorage.getItem('user'))._id,
      },
    });
  }, [dispatch]);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  const { mylistResults, mylistLoading } = useSelector((state) => state.mylist);

  return (
    <>
      <SubHeader>
        <div className="sub-title">내가 찜한 콘텐츠</div>
      </SubHeader>
      <Wrapper>
        {mylistLoading ? (
          <Spinner />
        ) : (
          mylistResults &&
          mylistResults.map((content) =>
            content.isMovie ? (
              <Poster
                key={content.id}
                id={content.id}
                imgUrl={content.poster_path}
                title={content.title}
                year={content.release_date && content.release_date.substring(0, 4)}
                rating={content.vote_average}
                genres={content.genres.map((c) => c.id)}
                isMovie={true}
              />
            ) : (
              <Poster
                key={content.id}
                id={content.id}
                imgUrl={content.poster_path}
                title={content.name}
                year={content.first_air_date && content.first_air_date.substring(0, 4)}
                rating={content.vote_average}
                genres={content.genres.map((c) => c.id)}
                isMovie={false}
              />
            )
          )
        )}
      </Wrapper>
      {mylistResults && mylistResults.length === 0 && (
        <NormalMessage value={'아직 찜하신 콘텐츠가 없습니다.'} />
      )}
    </>
  );
};

MylistRoute.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(MylistRoute);
