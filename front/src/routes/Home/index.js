import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentsBlock } from '../../components/Common/GlobalStyles';
import Spinner from '../../components/Common/Spinner';
import Poster from '../../components/Contents/Poster';
import Section from '../../components/Contents/Section';
import TopSection from '../../components/Contents/TopSection';
import { GET_RANDOM_REQUEST, LOAD_HOME_REQUEST } from '../../redux/type';

const HomeRoute = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_HOME_REQUEST,
    });
    dispatch({
      type: GET_RANDOM_REQUEST,
    });
  }, [dispatch]);
  const { homeResults, isLoading, randomResults, getRandomLoading } = useSelector(
    (state) => state.contents
  );

  if (isLoading || getRandomLoading) {
    return <Spinner />;
  }
  return (
    <>
      {randomResults && randomResults.popularMovie && (
        <TopSection
          id={randomResults.popularMovie.id}
          imgUrl={randomResults.popularMovie.backdrop_path}
          title={randomResults.popularMovie.title}
          overview={randomResults.popularMovie.overview}
          isMovie={true}
        />
      )}
      <ContentsBlock>
        {homeResults && homeResults.popularMovie && (
          <Section title="현재 인기 영화">
            {homeResults.popularMovie.map((content) => (
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
        {homeResults && homeResults.popularTV && (
          <Section title="현재 인기 드라마">
            {homeResults.popularTV.map((content) => (
              <Poster
                key={content.id}
                id={content.id}
                imgUrl={content.poster_path}
                title={content.name}
                year={content.first_air_date && content.first_air_date.substring(0, 4)}
                rating={content.vote_average}
                genres={content.genre_ids}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {homeResults && homeResults.airingTodayTV && (
          <Section title="오늘 방영된 TV채널">
            {homeResults.airingTodayTV.map((content) => (
              <Poster
                key={content.id}
                id={content.id}
                imgUrl={content.poster_path}
                title={content.name}
                year={content.first_air_date && content.first_air_date.substring(0, 4)}
                rating={content.vote_average}
                genres={content.genre_ids}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {homeResults && homeResults.topRatedMovie && (
          <Section title="최고 평점 영화">
            {homeResults.topRatedMovie.map((content) => (
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
        {homeResults && homeResults.topRatedTV && (
          <Section title="최고 평점 TV채널">
            {homeResults.topRatedTV.map((content) => (
              <Poster
                key={content.id}
                id={content.id}
                imgUrl={content.poster_path}
                title={content.name}
                year={content.first_air_date && content.first_air_date.substring(0, 4)}
                rating={content.vote_average}
                genres={content.genre_ids}
                isMovie={false}
              />
            ))}
          </Section>
        )}
      </ContentsBlock>
    </>
  );
};

export default HomeRoute;
