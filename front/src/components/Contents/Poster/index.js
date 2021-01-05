import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { DetailWrapper, PosterBlock, ButtonWrapper, EmptySpace } from './styles';
import Rating from '../Rating';
import { GenresData } from '../../../lib/util/GenresData';
import { IoPlay } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa';
import ModalPortal from '../../../lib/ModalPortal';
import DetailModal from '../../Detail/DetailModal';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_DETAIL } from '../../../redux/type';
import CircleButton from '../../Common/CircleButton';
import noPoster from '../../../static/images/noPoster.png';
import { withRouter } from 'react-router-dom';
import ListCheck from '../../ListCheck';

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
  const [isHovering, setIsHovering] = useState(false);
  const dispatch = useDispatch();

  const onOpenModal = () => {
    setVisble(true);
  };
  const onCloseModal = useCallback(() => {
    setVisble(false);
    dispatch({ type: CLEAR_DETAIL }); // 모달 닫으면 콘텐츠 지우기
  }, [dispatch]);

  const onEnterHover = () => {
    setIsHovering(true);
  };
  const onLeaveHover = () => {
    setIsHovering(false);
  };
  return (
    <>
      <PosterBlock
        rating={rating}
        className="poster_wrapper"
        isSlider={pathname.indexOf('genre') === -1 && pathname.indexOf('search') === -1}
        onMouseEnter={onEnterHover}
        onMouseLeave={onLeaveHover}
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
          {isHovering ? (
            <ButtonWrapper>
              <CircleButton>
                <IoPlay />
              </CircleButton>
              {userInfo && <ListCheck contentId={id} isMovie={isMovie} />}
              <CircleButton onClick={onOpenModal}>
                <FaChevronDown />
              </CircleButton>
            </ButtonWrapper>
          ) : (
            <EmptySpace />
          )}
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
  year: PropTypes.string,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired,
  isMovie: PropTypes.bool.isRequired,
};

export default withRouter(Poster);
