import React from 'react';
import PropTypes from 'prop-types';
import { DetailWrapper, PosterBlock, ButtonWrapper, Item } from './styles';
import Rating from '../Rating';
import { GenresData } from '../../../lib/util/GenresData';
import { IoPlay } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa';

const Poster = ({ imgUrl, title, year, rating, genres }) => {
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
        <div className="genres">
          {genres
            .slice(0, 2)
            .map((genre, index) =>
              index === genres.slice(0, 2).length - 1
                ? GenresData[genre]
                : `${GenresData[genre]} • `
            )}
        </div>
        <ButtonWrapper>
          <Item>
            <IoPlay />
          </Item>
          <Item className="button detail-button">
            <FaChevronDown />
          </Item>
        </ButtonWrapper>
      </DetailWrapper>
    </PosterBlock>
  );
};

Poster.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Poster;
