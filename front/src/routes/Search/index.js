import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../../components/Common/Spinner';
import Poster from '../../components/Contents/Poster';
import Wrapper from '../../components/Contents/Wrapper';
import SearchMessage from '../../components/Message/SearchMessage';

const SearchRoute = ({
  history,
  history: {
    location: { search },
  },
}) => {
  const { searchResults, isLoading } = useSelector((state) => state.contents);

  useEffect(() => {
    if (!isLoading && !searchResults) {
      history.push('/');
    }
  }, [history, searchResults, isLoading]);
  return (
    <>
      <Wrapper>
        {isLoading ? (
          <Spinner />
        ) : (
          searchResults &&
          searchResults.map((content) =>
            content.media_type === 'person' ? (
              content.known_for.map((content) =>
                content.media_type === 'movie' ? (
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
                ) : (
                  <Poster
                    key={content.id}
                    id={content.id}
                    imgUrl={content.poster_path}
                    title={content.name}
                    year={
                      content.first_air_date && content.first_air_date.substring(0, 4)
                    }
                    rating={content.vote_average}
                    genres={content.genre_ids}
                    isMovie={false}
                  />
                )
              )
            ) : content.media_type === 'movie' ? (
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
            ) : (
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
            )
          )
        )}
      </Wrapper>
      {searchResults && searchResults.length === 0 && (
        <SearchMessage searchValue={search.slice(3)} />
      )}
    </>
  );
};

SearchRoute.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }),
  }),
};

export default withRouter(SearchRoute);
