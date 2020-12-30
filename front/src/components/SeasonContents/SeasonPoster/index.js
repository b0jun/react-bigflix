import React from 'react';
import PropTypes from 'prop-types';
import { Img, PosterWrapper, Info } from './styles';

const SeasonPoster = ({ number, imgUrl, title, overview }) => {
  return (
    <PosterWrapper>
      <div className="number">{number}</div>
      <div className="img-wrapper">
        <Img src={imgUrl} />
      </div>
      <Info>
        <div className="title">{title}</div>
        <div className="overview">
          {overview ? overview : '본 콘텐츠의 줄거리는 준비 중입니다.'}
        </div>
      </Info>
    </PosterWrapper>
  );
};

SeasonPoster.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default SeasonPoster;
