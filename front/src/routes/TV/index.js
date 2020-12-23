import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentsBlock } from '../../components/Common/GlobalStyles';
import Poster from '../../components/Contents/Poster';
import Section from '../../components/Contents/Section';
import TopSection from '../../components/Contents/TopSection';
import GenreBox from '../../components/GenreBox';
import SubHeader from '../../components/SubHeader';
import { TvGenres } from '../../lib/util/GenresData';
import { GET_RANDOM_REQUEST, LOAD_TV_REQUEST } from '../../redux/type';

const TVRoute = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_TV_REQUEST,
    });
    dispatch({
      type: GET_RANDOM_REQUEST,
    });
  }, [dispatch]);
  const { tvResults, randomResults } = useSelector((state) => state.contents);

  return (
    <>
      <SubHeader>
        <div className="sub-title">TV 프로그램</div>
        <GenreBox genres={TvGenres} isMovie={false} />
      </SubHeader>
      {randomResults && randomResults.tvTrendingWeek && (
        <TopSection
          id={randomResults.tvTrendingWeek.id}
          imgUrl={randomResults.tvTrendingWeek.backdrop_path}
          title={randomResults.tvTrendingWeek.name}
          overview={randomResults.tvTrendingWeek.overview}
          isMovie={false}
        />
      )}
      <ContentsBlock>
        {tvResults && tvResults.tvTrendingDay && (
          <Section title="오늘 하루 인기 TV채널">
            {tvResults.tvTrendingDay.map((content) => (
              <Poster
                key={content.id}
                imgUrl={content.poster_path}
                title={content.name}
                year={content.first_air_date && content.first_air_date.substring(0, 4)}
                rating={content.vote_average}
                genres={content.genre_ids}
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.tvTrendingWeek && (
          <Section title="주간 인기 TV채널">
            {tvResults.tvTrendingWeek.map((content) => (
              <Poster
                key={content.id}
                imgUrl={content.poster_path}
                title={content.name}
                year={content.first_air_date && content.first_air_date.substring(0, 4)}
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

export default TVRoute;
