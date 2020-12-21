import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/Common/Spinner';
import Poster from '../../components/Contents/Poster';
import Section from '../../components/Contents/Section';
import { LOAD_HOME_REQUEST } from '../../redux/type';
const HomeRoute = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_HOME_REQUEST,
    });
  }, [dispatch]);
  const { homeResults, isLoading } = useSelector((state) => state.contents);
  if (isLoading) {
    return <Spinner />;
  }
  console.log(homeResults);
  return (
    <>
      {homeResults && homeResults.popularMovie && (
        <Section title="현재 인기 영화">
          {homeResults.popularMovie.map((content) => (
            <Poster
              key={content.id}
              imgUrl={content.poster_path}
              title={content.title}
              year={content.release_date && content.release_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {homeResults && homeResults.popularTV && (
        <Section title="현재 인기 드라마">
          {homeResults.popularTV.map((content) => (
            <Poster
              key={content.id}
              imgUrl={content.poster_path}
              title={content.name}
              year={content.first_air_date && content.first_air_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      <Section title="오늘 방영된 TV채널">d</Section>
      <Section title="최고 평점 영화">d</Section>
      <Section title="최고 평점 TV채널">d</Section>
    </>
  );
};

export default HomeRoute;
