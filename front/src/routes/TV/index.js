import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MinHeightBlock } from '../../components/Common/GlobalStyles';
import Poster from '../../components/Contents/Poster';
import Section from '../../components/Contents/Section';
import { LOAD_TV_REQUEST } from '../../redux/type';

const TVRoute = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_TV_REQUEST,
    });
  }, [dispatch]);
  const { tvResults } = useSelector((state) => state.contents);

  return (
    <MinHeightBlock>
      {tvResults && tvResults.tvTrendingDay && (
        <Section title="오늘 하루 인기 TV채널">
          {tvResults.tvTrendingDay.map((content) => (
            <Poster
              key={content.id}
              imgUrl={content.poster_path}
              title={content.name}
              year={content.release_date && content.first_air_date.substring(0, 4)}
              rating={content.vote_average}
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
            />
          ))}
        </Section>
      )}
    </MinHeightBlock>
  );
};

export default TVRoute;
