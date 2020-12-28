import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { IoClose } from 'react-icons/io5';
import { CloseButton, DetailModalBlock } from './styles';
import { LOAD_DETAIL_REQUEST, LOAD_SIMILAR_REQUEST } from '../../../redux/type';
import Spinner from '../../Common/Spinner';
import noBackdrop from '../../../static/images/noBackdrop.png';

import DetailBackDrop from '../DetailBackDrop';
import DetailInfo from '../DetailInfo';
import { runtimeConverter } from '../../../lib/util/ConvertData';
import SimilarWrapper from '../../SimilarContents/SimilarWrapper';
import SimilarPoster from '../../SimilarContents/SimilarPoster';

const DetailModal = ({ id, isMovie, onClose }) => {
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

  const { detailResult, detailLoading, similarResults, similarLoading } = useSelector(
    (state) => state.contents
  );
  // console.log(detailResult);

  const [simiarLimit, setSimilarLimit] = useState(12);
  console.log(similarResults);

  const onSimilarViewMore = useCallback(() => {
    if (simiarLimit < 20) {
      setSimilarLimit(20);
    }
    if (simiarLimit === 20) {
      setSimilarLimit(12);
    }
  }, [simiarLimit]);

  return (
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
              <SimilarWrapper>
                {similarResults.slice(0, simiarLimit).map((data) => (
                  <SimilarPoster
                    key={data.id}
                    imgUrl={
                      data.backdrop_path
                        ? `https://image.tmdb.org/t/p/w300${data.backdrop_path}`
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
  );
};

DetailModal.propTypes = {
  id: PropTypes.number.isRequired,
  isMovie: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DetailModal;
