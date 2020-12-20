import { Tmdb } from '.';

export const movieApi = {
  popularMovie: () => Tmdb.get('movie/popular'),
  topRatedMovie: () => Tmdb.get('movie/top_rated'),
  movieDetail: (id) =>
    Tmdb.get(`movie/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  movieSimilar: (id) => Tmdb.get(`movie/${id}/similar`),
  movieTrendingDay: () => Tmdb.get('trending/movie/day'),
  movieTrendingWeek: () => Tmdb.get('trending/movie/week'),
  getGenre: () => Tmdb.get('genre/movie/list'),
  movieDiscover: (genre, page) =>
    Tmdb.get(`discover/movie`, {
      params: {
        with_genres: genre,
        page: page,
      },
    }),
};

export const tvApi = {
  popularTV: () => Tmdb.get('tv/popular'),
  topRatedTV: () => Tmdb.get('tv/top_rated'),
  airingTodayTV: () => Tmdb.get('tv/airing_today'),
  tvDetail: (id) =>
    Tmdb.get(`tv/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  tvSimilar: (id) => Tmdb.get(`tv/${id}/similar`),
  tvTrendingDay: () => Tmdb.get('trending/tv/day'),
  tvTrendingWeek: () => Tmdb.get('trending/tv/week'),
  getGenre: () => Tmdb.get('genre/tv/list'),
  tvDiscover: (genre, page) =>
    Tmdb.get(`discover/tv`, {
      params: {
        with_genres: genre,
        page: page,
      },
    }),
  tvSeasons: (id, season_number) => Tmdb.get(`tv/${id}/season/${season_number}`),
};

export const multiApi = {
  search: (term) =>
    Tmdb.get(`search/multi?${term}`, {
      params: {
        query: term,
      },
    }),
};
