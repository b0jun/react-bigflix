import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MOVIE_REQUEST } from '../../redux/type';

const MovieRoute = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_MOVIE_REQUEST,
    });
  }, [dispatch]);
  const { movieResults } = useSelector((state) => state.contents);
  console.log(movieResults);
  return <div>Movie</div>;
};

export default MovieRoute;
