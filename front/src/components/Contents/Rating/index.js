import React from 'react';
import PropTypes from 'prop-types';

import starOutline from '../../../static/images/star_outline.png';
import starFill from '../../../static/images/star_fill.png';

import { RatingBlock, StarOutline, StarFill, StarImg, Score } from './styles';

const Rating = ({ rating }) => (
  <RatingBlock>
    <div className="rating-wrapper">
      <StarOutline>
        <StarImg src={starOutline} />
        <StarImg src={starOutline} />
        <StarImg src={starOutline} />
        <StarImg src={starOutline} />
        <StarImg src={starOutline} />
      </StarOutline>
      <StarFill className="star-fill">
        <StarImg src={starFill} />
        <StarImg src={starFill} />
        <StarImg src={starFill} />
        <StarImg src={starFill} />
        <StarImg src={starFill} />
      </StarFill>
    </div>
    <Score>{rating}</Score>
  </RatingBlock>
);

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
export default Rating;
