import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_GENRE_REQUEST } from '../../redux/type';
import Poster from '../../components/Contents/Poster';
import SubHeader from '../../components/SubHeader';
import Wrapper from '../../components/Contents/Wrapper';
import { withRouter } from 'react-router-dom';
import { GenresData } from '../../lib/util/GenresData';
import Spinner from '../../components/Common/Spinner';

const GenreRoute = ({
  match: {
    params: { id },
    url,
  },
  history,
}) => {
  const { genreResults, isLoading } = useSelector((state) => state.contents);
  const dispatch = useDispatch();
  const isMovie = url.indexOf('/movie') !== -1;
  useEffect(() => {
    dispatch({
      type: LOAD_GENRE_REQUEST,
      data: { id, isMovie },
    });
  }, [dispatch, isMovie, id]);

  const goBack = () => {
    history.goBack();
  };
  return (
    <>
      <SubHeader>
        <div className="go-back" onClick={goBack}>
          {isMovie ? '영화 >' : 'TV 프로그램 >'}
        </div>
        <div className="sub-title">{GenresData[url.split('/')[3]]}</div>
      </SubHeader>
      <Wrapper>
        {isLoading || !genreResults ? (
          <Spinner />
        ) : (
          genreResults.map((content) => (
            <Poster
              key={content.id}
              id={content.id}
              imgUrl={content.poster_path}
              title={isMovie ? content.title : content.name}
              year={
                isMovie
                  ? content.release_date && content.release_date.substring(0, 4)
                  : content.first_air_date && content.first_air_date.substring(0, 4)
              }
              rating={content.vote_average}
              genres={content.genre_ids}
              isMovie={true}
            />
          ))
        )}
      </Wrapper>
    </>
  );
};

GenreRoute.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};
export default withRouter(GenreRoute);
