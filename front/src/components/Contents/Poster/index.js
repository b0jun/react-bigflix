import React from 'react';
import PropTypes from 'prop-types';
import { DetailWrapper, PosterBlock } from './styles';
import Rating from '../Rating';

const Poster = ({ imgUrl, title, year, rating }) => {
  return (
    <PosterBlock rating={rating} className="poster_wrapper">
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
        <div className="title detail-item">{title}</div>
        <div className="year detail-item">{year}</div>
        <Rating rating={rating} />
      </DetailWrapper>
    </PosterBlock>
  );
};

Poster.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Poster;
