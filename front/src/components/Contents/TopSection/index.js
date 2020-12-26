import React from 'react';
import PropTypes from 'prop-types';
import { BackDrop, TopSectionBlock, Info, DetailButton } from './styles';
import { MdInfoOutline } from 'react-icons/md';
import { FlexWrapper } from '../../Common/GlobalStyles';
import { IoPlay } from 'react-icons/io5';

const TopSection = ({ id, imgUrl, title, overview, isMovie }) => {
  return (
    <TopSectionBlock>
      <BackDrop imgUrl={imgUrl} />
      <Info>
        <div className="title">{title}</div>
        <div className="overview">
          &nbsp;{overview.length > 200 ? `${overview.substring(0, 250)}...` : overview}
        </div>
        <FlexWrapper>
          <DetailButton left>
            <IoPlay />
            <p>&nbsp;재생</p>
          </DetailButton>
          <DetailButton>
            <MdInfoOutline />
            <p>&nbsp;상세 정보</p>
          </DetailButton>
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
