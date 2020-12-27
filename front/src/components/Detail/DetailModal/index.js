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
  DetailInfo,
  DetailItem,
  Title,
  InfoLeft,
  InfoRight,
} from './styles';
import { LOAD_DETAIL_REQUEST } from '../../../redux/type';
import SquareButton from '../../Common/SquareButton';
import { FlexWrapper } from '../../Common/GlobalStyles';
import CircleButton from '../../Common/CircleButton';
import Spinner from '../../Common/Spinner';
import { runtimeConverter } from '../../../lib/util/ConvertData';
import noBackdrop from '../../../static/images/noBackdrop.png';

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
            <div className="img-wrapper">
              <BackDrop
                src={
                  detailResult.backdrop_path
                    ? `https://image.tmdb.org/t/p/original/${detailResult.backdrop_path}`
                    : noBackdrop
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
              <DetailInfo>
                <InfoLeft>
                  <FlexWrapper>
                    <div className="year info-item">
                      {isMovie
                        ? detailResult.release_date.substring(0, 4)
                        : detailResult.last_air_date.substring(0, 4)}
                    </div>
                    <div className="info-item">
                      {isMovie
                        ? runtimeConverter(detailResult.runtime)
                        : `시즌 ${detailResult.seasons.length}개`}
                    </div>
                  </FlexWrapper>
                  <div className="overview">
                    {detailResult.overview
                      ? detailResult.overview
                      : '본 콘텐츠의 줄거리는 준비 중입니다.'}
                  </div>
                </InfoLeft>
                <InfoRight>
                  <div className="genres-wrapper">
                    <span>장르:</span>
                    {detailResult.genres &&
                      detailResult.genres.map((genre, index) =>
                        index === detailResult.genres.length - 1
                          ? genre.name
                          : `${genre.name} • `
                      )}
                  </div>
                  {!isMovie && detailResult.networks && (
                    <div className="logo-wrapper">
                      {detailResult.networks
                        .slice(0, 4)
                        .map(
                          (network) =>
                            network.logo_path && (
                              <img
                                className="logo"
                                key={network.id}
                                src={`https://image.tmdb.org/t/p/w200/${network.logo_path}`}
                                alt={network.name}
                              />
                            )
                        )}
                    </div>
                  )}
                  {isMovie && (
                    <div className="logo-wrapper">
                      {detailResult.production_companies
                        .slice(0, 4)
                        .map(
                          (company) =>
                            company.logo_path && (
                              <img
                                className="logo"
                                key={company.id}
                                src={`https://image.tmdb.org/t/p/w200/${company.logo_path}`}
                                alt={company.name}
                              />
                            )
                        )}
                    </div>
                  )}
                </InfoRight>
              </DetailInfo>
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
