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
import { IoChevronDownSharp } from 'react-icons/io5';
const SimilarWrapper = ({ children }) => {
  return (
    <SimilarBlock>
      <Title>비슷한 콘텐츠</Title>
      <ContentsWrapper>{children}</ContentsWrapper>
      <MoreWrapper>
        <div className="button-wrapper">
          <Line />
          <MoreButton>
            <IoChevronDownSharp />
          </MoreButton>
        </div>
      </MoreWrapper>
    </SimilarBlock>
  );
};

SimilarWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SimilarWrapper;
