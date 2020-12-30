import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentsBlock } from '../../components/Common/GlobalStyles';
import Spinner from '../../components/Common/Spinner';
import Poster from '../../components/Contents/Poster';
import Section from '../../components/Contents/Section';
import TopSection from '../../components/Contents/TopSection';
import GenreBox from '../../components/GenreBox';
import SubHeader from '../../components/SubHeader';
import { MovieGenres } from '../../lib/util/GenresData';
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
  const { movieResults, randomResults, isLoading, getRandomLoading } = useSelector(
    (state) => state.contents
  );

  if (isLoading || getRandomLoading) {
    return <Spinner />;
  }

  return (
    <>
      <SubHeader>
        <div className="sub-title">영화</div>
        <GenreBox genres={MovieGenres} isMovie={true} />
      </SubHeader>
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
                id={content.id}
                imgUrl={content.poster_path}
                title={content.title}
                year={content.release_date && content.release_date.substring(0, 4)}
                rating={content.vote_average}
                genres={content.genre_ids}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {movieResults && movieResults.movieTrendingWeek && (
          <Section title="주간 인기 영화">
            {movieResults.movieTrendingWeek.map((content) => (
              <Poster
                key={content.id}
                id={content.id}
                imgUrl={content.poster_path}
                title={content.title}
                year={content.release_date && content.release_date.substring(0, 4)}
                rating={content.vote_average}
                genres={content.genre_ids}
                isMovie={true}
              />
            ))}
          </Section>
        )}
      </ContentsBlock>
    </>
  );
};

export default MovieRoute;
