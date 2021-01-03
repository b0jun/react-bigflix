import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { DetailWrapper, PosterBlock, ButtonWrapper } from './styles';
import Rating from '../Rating';
import { GenresData } from '../../../lib/util/GenresData';
import { IoPlay } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa';
import { GoPlus } from 'react-icons/go';
import ModalPortal from '../../../lib/ModalPortal';
import DetailModal from '../../Detail/DetailModal';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_DETAIL } from '../../../redux/type';
import CircleButton from '../../Common/CircleButton';
import noPoster from '../../../static/images/noPoster.png';
import { withRouter } from 'react-router-dom';

const Poster = ({
  id,
  imgUrl,
  title,
  year,
  rating,
  genres,
  isMovie,
  location: { pathname },
}) => {
  const { userInfo } = useSelector((state) => state.auth);
  const [visible, setVisble] = useState(false);
  const dispatch = useDispatch();

  const onOpenModal = () => {
    setVisble(true);
  };
  const onCloseModal = useCallback(() => {
    setVisble(false);
    dispatch({ type: CLEAR_DETAIL }); // 모달 닫으면 콘텐츠 지우기
  }, [dispatch]);
  return (
    <>
      <PosterBlock
        rating={rating}
        className="poster_wrapper"
        isSlider={pathname.indexOf('genre') === -1}
      >
        <img
          className="poster_img"
          src={imgUrl ? `https://image.tmdb.org/t/p/w500/${imgUrl}` : noPoster}
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
            <CircleButton>
              <IoPlay />
            </CircleButton>
            {userInfo && (
              <CircleButton>
                <GoPlus />
              </CircleButton>
            )}
            <CircleButton onClick={onOpenModal}>
              <FaChevronDown />
            </CircleButton>
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
  imgUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired,
  isMovie: PropTypes.bool.isRequired,
};

export default withRouter(Poster);
