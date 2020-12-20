import axios from 'axios';

export const Tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: process.env.REACT_APP_TMDB_KEY,
    language: 'ko-KR',
  },
});
