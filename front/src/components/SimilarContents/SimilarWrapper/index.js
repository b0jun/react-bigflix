import React from 'react';
import PropTypes from 'prop-types';
import {
  SimilarBlock,
  Title,
  ContentsWrapper,
  MoreWrapper,
  MoreButton,
  Line,
} from './styles';
import { IoChevronDownSharp, IoChevronUpSharp } from 'react-icons/io5';
const SimilarWrapper = ({ children, simiarLimit, moreButton }) => {
  return (
    <SimilarBlock>
      <Title>비슷한 콘텐츠</Title>
      <ContentsWrapper>{children}</ContentsWrapper>
      <MoreWrapper isMore={simiarLimit === 12}>
        <div className="button-wrapper">
          <Line />
          <MoreButton onClick={moreButton}>
            {simiarLimit === 12 ? <IoChevronDownSharp /> : <IoChevronUpSharp />}
          </MoreButton>
        </div>
      </MoreWrapper>
    </SimilarBlock>
  );
};

SimilarWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  moreButton: PropTypes.func.isRequired,
};

export default SimilarWrapper;
