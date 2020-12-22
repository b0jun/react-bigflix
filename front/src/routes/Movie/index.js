import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentsBlock } from '../../components/Common/GlobalStyles';
import Poster from '../../components/Contents/Poster';
import Section from '../../components/Contents/Section';
import TopSection from '../../components/Contents/TopSection';
import { GET_RANDOM_REQUEST, LOAD_MOVIE_REQUEST } from '../../redux/type';

const MovieRoute = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_MOVIE_REQUEST,
    });
    dispatch({
      type: GET_RANDOM_REQUEST,
    });
  }, [dispatch]);
  const { movieResults, randomResults } = useSelector((state) => state.contents);

  return (
    <>
      {randomResults && randomResults.movieTrendingWeek && (
        <TopSection
          id={randomResults.movieTrendingWeek.id}
          imgUrl={randomResults.movieTrendingWeek.backdrop_path}
          title={randomResults.movieTrendingWeek.title}
          overview={randomResults.movieTrendingWeek.overview}
          isMovie={true}
        />
      )}
      <ContentsBlock>
        {movieResults && movieResults.movieTrendingDay && (
          <Section title="오늘 하루 인기 영화">
            {movieResults.movieTrendingDay.map((content) => (
              <Poster
                key={content.id}
                imgUrl={content.poster_path}
                title={content.title}
                year={content.release_date && content.release_date.substring(0, 4)}
                rating={content.vote_average}
                genres={content.genre_ids}
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
                genres={content.genre_ids}
              />
            ))}
          </Section>
        )}
      </ContentsBlock>
    </>
  );
};

export default MovieRoute;
