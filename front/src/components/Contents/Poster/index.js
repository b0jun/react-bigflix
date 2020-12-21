import React from 'react';
import PropTypes from 'prop-types';
import { DetailWrapper, PosterBlock } from './styles';

const Poster = ({ imgUrl, title, year }) => {
  return (
    <PosterBlock className="poster_wrapper">
      <img
        className="poster_img"
        src={
          imgUrl
            ? `https://image.tmdb.org/t/p/w500/${imgUrl}`
            : require('../../../static/images/noPoster.png')
        }
        alt={title}
      />
      <DetailWrapper>
        <div className="title">{title}</div>
        <div className="year">{year}</div>
      </DetailWrapper>
    </PosterBlock>
  );
};

Poster.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default Poster;
