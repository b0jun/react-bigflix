import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { IoClose } from 'react-icons/io5';
import { CloseButton, DetailModalBlock, DetailItem } from './styles';
import { LOAD_DETAIL_REQUEST } from '../../../redux/type';
import Spinner from '../../Common/Spinner';
import noBackdrop from '../../../static/images/noBackdrop.png';
import DetailBackDrop from '../DetailBackDrop';
import DetailInfo from '../DetailInfo';
import { runtimeConverter } from '../../../lib/util/ConvertData';

const DetailModal = ({ id, isMovie, onClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_DETAIL_REQUEST,
      data: { id, isMovie },
    });
  }, [dispatch, id, isMovie]);

  const { detailResult, detailLoading } = useSelector((state) => state.contents);
  console.log(detailResult);

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
            <DetailBackDrop
              title={isMovie ? detailResult.title : detailResult.name}
              imgUrl={
                detailResult.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${detailResult.backdrop_path}`
                  : noBackdrop
              }
            />
            <div className="contents-wrapper">
              <DetailInfo
                year={
                  isMovie
                    ? detailResult.release_date.substring(0, 4)
                    : detailResult.last_air_date.substring(0, 4)
                }
                sub={
                  isMovie
                    ? runtimeConverter(detailResult.runtime)
                    : `시즌 ${detailResult.seasons.length}개`
                }
                overview={
                  detailResult.overview
                    ? detailResult.overview
                    : '본 콘텐츠의 줄거리는 준비 중입니다.'
                }
                genres={detailResult.genres}
                companies={
                  isMovie ? detailResult.production_companies : detailResult.networks
                }
              />
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
