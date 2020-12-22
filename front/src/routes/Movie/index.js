import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MinHeightBlock } from '../../components/Common/GlobalStyles';
import Poster from '../../components/Contents/Poster';
import Section from '../../components/Contents/Section';
import { LOAD_MOVIE_REQUEST } from '../../redux/type';

const MovieRoute = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_MOVIE_REQUEST,
    });
  }, [dispatch]);
  const { movieResults } = useSelector((state) => state.contents);
  return (
    <MinHeightBlock>
      {movieResults && movieResults.movieTrendingDay && (
        <Section title="오늘 하루 인기 영화">
          {movieResults.movieTrendingDay.map((content) => (
            <Poster
              key={content.id}
              imgUrl={content.poster_path}
              title={content.title}
              year={content.release_date && content.release_date.substring(0, 4)}
              rating={content.vote_average}
            />
          ))}
        </Section>
      )}
      {movieResults && movieResults.movieTrendingWeek && (
        <Section title="주간 인기 영화">
          {movieResults.movieTrendingWeek.map((content) => (
            <Poster
              key={content.id}
              imgUrl={content.poster_path}
              title={content.title}
              year={content.release_date && content.release_date.substring(0, 4)}
              rating={content.vote_average}
            />
          ))}
        </Section>
      )}
    </MinHeightBlock>
  );
};

export default MovieRoute;
