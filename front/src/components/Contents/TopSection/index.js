import React from 'react';
import PropTypes from 'prop-types';
import { BackDrop, TopSectionBlock, Info } from './styles';
import { MdInfoOutline } from 'react-icons/md';
import { FlexWrapper } from '../../Common/GlobalStyles';
import { IoPlay } from 'react-icons/io5';
import SquareButton from '../../Common/SquareButton';
import noBackdrop from '../../../static/images/noBackdrop.png';

const TopSection = ({ id, imgUrl, title, overview, isMovie }) => {
  return (
    <TopSectionBlock>
      <BackDrop imgUrl={imgUrl ? imgUrl : noBackdrop} />
      <Info>
        <div className="title">{title}</div>
        <div className="overview">
          &nbsp;{overview.length > 200 ? `${overview.substring(0, 250)}...` : overview}
        </div>
        <FlexWrapper>
          <SquareButton marginR>
            <IoPlay />
            <p>&nbsp;재생</p>
          </SquareButton>
          <SquareButton gray>
            <MdInfoOutline />
            <p>&nbsp;상세 정보</p>
          </SquareButton>
        </FlexWrapper>
      </Info>
    </TopSectionBlock>
  );
};

TopSection.propTypes = {
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  isMovie: PropTypes.bool.isRequired,
};

export default TopSection;
