import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DetailWrapper, PosterBlock, ButtonWrapper, Item } from './styles';
import Rating from '../Rating';
import { GenresData } from '../../../lib/util/GenresData';
import { IoPlay } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa';
import { GoPlus } from 'react-icons/go';
import ModalPortal from '../../../lib/ModalPortal';
import DetailModal from '../../Detail/DetailModal';

const Poster = ({ id, imgUrl, title, year, rating, genres, isMovie }) => {
  const [visible, setVisble] = useState(false);

  const onOpenModal = () => {
    setVisble(true);
  };
  const onCloseModal = () => {
    setVisble(false);
  };
  return (
    <>
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
            <Item>
              <GoPlus />
            </Item>
            <Item>
              <FaChevronDown onClick={onOpenModal} />
            </Item>
          </ButtonWrapper>
        </DetailWrapper>
      </PosterBlock>
      {visible && (
        <ModalPortal>
          <DetailModal id={id} isMovie={isMovie} onClose={onCloseModal} />
        </ModalPortal>
      )}
    </>
  );
};

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  isMovie: PropTypes.bool.isRequired,
};

export default Poster;
