import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { IoClose, IoPlay } from 'react-icons/io5';
import { GoPlus } from 'react-icons/go';
import {
  CloseButton,
  DetailModalBlock,
  BackDrop,
  BackDropBottom,
  DetailItem,
  Title,
} from './styles';
import { LOAD_DETAIL_REQUEST } from '../../../redux/type';
import SquareButton from '../../Common/SquareButton';
import { FlexWrapper } from '../../Common/GlobalStyles';
import CircleButton from '../../Common/CircleButton';
import Spinner from '../../Common/Spinner';

const DetailModal = ({ id, isMovie, onClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_DETAIL_REQUEST,
      data: { id, isMovie },
    });
  }, [dispatch, id, isMovie]);

  const { detailResult, detailLoading } = useSelector((state) => state.contents);

  return (
    <DetailModalBlock>
      <div className="top-wrapper">
        <CloseButton onClick={onClose}>
          <IoClose size={30} />
        </CloseButton>
      </div>
      {detailLoading ? (
        <Spinner />
      ) : (
        detailResult && (
          <>
            <div className="img-wrapper">
              <BackDrop
                src={
                  detailResult.backdrop_path
                    ? `https://image.tmdb.org/t/p/original/${detailResult.backdrop_path}`
                    : require('../../../static/images/noBackdrop.png')
                }
                alt={isMovie ? detailResult.title : detailResult.name}
              />
              <BackDropBottom>
                <Title>{isMovie ? detailResult.title : detailResult.name}</Title>
                <FlexWrapper>
                  <SquareButton marginR>
                    <IoPlay />
                    <p>&nbsp;재생</p>
                  </SquareButton>
                  <CircleButton>
                    <GoPlus />
                  </CircleButton>
                </FlexWrapper>
              </BackDropBottom>
            </div>
            <div className="contents-wrapper">
              <DetailItem>TEMP</DetailItem>
              <DetailItem>TEMP</DetailItem>
              <DetailItem>TEMP</DetailItem>
              <DetailItem>TEMP</DetailItem>
              <DetailItem>TEMP</DetailItem>
              <DetailItem>TEMP</DetailItem>
              <DetailItem>TEMP</DetailItem>
              <DetailItem>TEMP</DetailItem>
              <DetailItem>TEMP</DetailItem>
              <DetailItem>TEMP</DetailItem>
              <DetailItem>TEMP</DetailItem>
              <DetailItem>TEMP</DetailItem>
            </div>
          </>
        )
      )}
    </DetailModalBlock>
  );
};

DetailModal.propTypes = {
  id: PropTypes.number.isRequired,
  isMovie: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DetailModal;
