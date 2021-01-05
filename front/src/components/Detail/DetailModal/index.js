import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { IoClose } from 'react-icons/io5';
import { CloseButton, DetailModalBlock, ModalStyle } from './styles';
import { LOAD_DETAIL_REQUEST, LOAD_SIMILAR_REQUEST } from '../../../redux/type';
import Spinner from '../../Common/Spinner';
import noBackdrop from '../../../static/images/noBackdrop.png';

import DetailBackDrop from '../DetailBackDrop';
import DetailInfo from '../DetailInfo';
import { runtimeConverter } from '../../../lib/util/ConvertData';
import SimilarWrapper from '../../SimilarContents/SimilarWrapper';
import SimilarPoster from '../../SimilarContents/SimilarPoster';
import SeasonWrapper from '../../SeasonContents/SeasonWrapper';
import SeasonPoster from '../../SeasonContents/SeasonPoster';
import { Message } from '../../SimilarContents/SimilarWrapper/styles';

const DetailModal = ({ id, isMovie, onClose }) => {
  const {
    detailResult,
    detailLoading,
    similarResults,
    similarLoading,
    seasonResults,
    seasonLoading,
  } = useSelector((state) => state.contents);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_DETAIL_REQUEST,
      data: { id, isMovie },
    });
    dispatch({
      type: LOAD_SIMILAR_REQUEST,
      data: { id, isMovie },
    });
  }, [dispatch, id, isMovie]);

  /* Similar 콘텐츠 기본 12개 -> 더보기 시 20개 */
  const [simiarLimit, setSimilarLimit] = useState(12);

  const onSimilarViewMore = useCallback(() => {
    if (simiarLimit === 12) {
      return setSimilarLimit(20);
    }
    if (simiarLimit === 20) {
      return setSimilarLimit(12);
    }
  }, [simiarLimit]);

  // 모달 외부 클릭 시 닫기
  const onExternalClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );
  console.log(detailResult);
  return (
    <ModalStyle onClick={onExternalClick}>
      <DetailModalBlock>
        <div className="top-wrapper">
          <CloseButton onClick={onClose}>
            <IoClose size={30} />
          </CloseButton>
        </div>
        {detailLoading || similarLoading ? (
          <Spinner />
        ) : (
          detailResult && (
            <>
              <DetailBackDrop
                title={isMovie ? detailResult.title : detailResult.name}
                imgUrl={
                  detailResult.backdrop_path
                    ? `https://image.tmdb.org/t/p/original${detailResult.backdrop_path}`
                    : noBackdrop
                }
                id={id}
                isMovie={isMovie}
              />
              <div className="contents-wrapper">
                <DetailInfo
                  year={
                    isMovie
                      ? detailResult.release_date &&
                        detailResult.release_date.substring(0, 4)
                      : detailResult.last_air_date &&
                        detailResult.last_air_date.substring(0, 4)
                  }
                  sub={
                    isMovie
                      ? runtimeConverter(detailResult.runtime)
                      : `시즌 ${
                          detailResult.seasons[0].season_number === 0
                            ? detailResult.seasons.length - 1
                            : detailResult.seasons.length
                        }개`
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
                {!isMovie && (
                  <SeasonWrapper seasons={detailResult.seasons}>
                    {seasonLoading || !seasonResults ? (
                      <Spinner />
                    ) : seasonResults.episodes.length !== 0 ? (
                      seasonResults.episodes.map((data) => (
                        <SeasonPoster
                          key={data.id}
                          number={data.episode_number}
                          title={data.name}
                          overview={
                            data.overview.length > 100
                              ? `${data.overview.substring(0, 100)}...`
                              : data.overview
                          }
                          imgUrl={
                            data.still_path
                              ? `https://image.tmdb.org/t/p/w300${data.still_path}`
                              : noBackdrop
                          }
                        />
                      ))
                    ) : (
                      <Message>해당 시즌은 준비 중 입니다.</Message>
                    )}
                  </SeasonWrapper>
                )}
                <SimilarWrapper
                  simiarLimit={simiarLimit}
                  moreButton={onSimilarViewMore}
                  isMoreShow={similarResults.length > 12}
                  isContents={similarResults.length !== 0}
                  isMovie={isMovie}
                >
                  {similarResults.length !== 0 &&
                    similarResults
                      .slice(0, simiarLimit)
                      .map((data) => (
                        <SimilarPoster
                          key={data.id}
                          imgUrl={
                            data.backdrop_path
                              ? `https://image.tmdb.org/t/p/w500${data.backdrop_path}`
                              : noBackdrop
                          }
                          title={isMovie ? data.title : data.name}
                          overview={
                            data.overview.length > 100
                              ? `${data.overview.substring(0, 100)}...`
                              : data.overview
                          }
                        />
                      ))}
                </SimilarWrapper>
              </div>
            </>
          )
        )}
      </DetailModalBlock>
    </ModalStyle>
  );
};

DetailModal.propTypes = {
  id: PropTypes.number.isRequired,
  isMovie: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DetailModal;
