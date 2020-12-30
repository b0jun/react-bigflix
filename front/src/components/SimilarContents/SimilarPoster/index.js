import React from 'react';
import PropTypes from 'prop-types';
import { Img, PosterWrapper, Info } from './styles';
const SimilarPoster = ({ imgUrl, title, overview }) => {
  return (
    <PosterWrapper>
      <Img imgUrl={imgUrl} />
      <Info>
        <div className="title">{title}</div>
        <div className="overview">
          {overview ? overview : '본 콘텐츠의 줄거리는 준비 중입니다.'}
        </div>
      </Info>
    </PosterWrapper>
  );
};

SimilarPoster.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default SimilarPoster;
