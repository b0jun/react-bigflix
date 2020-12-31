import React from 'react';
import PropTypes from 'prop-types';
import {
  SimilarBlock,
  Title,
  ContentsWrapper,
  MoreWrapper,
  MoreButton,
  Line,
  Message,
} from './styles';
import { IoChevronDownSharp, IoChevronUpSharp } from 'react-icons/io5';
import { useSelector } from 'react-redux';

const SimilarWrapper = ({
  children,
  simiarLimit,
  moreButton,
  isMoreShow,
  isContents,
  isMovie,
}) => {
  const { detailResult } = useSelector((state) => state.contents);

  return (
    <SimilarBlock>
      <Title>비슷한 콘텐츠</Title>
      {isContents ? (
        <>
          <ContentsWrapper>{children}</ContentsWrapper>
          {isMoreShow && (
            <MoreWrapper isMore={simiarLimit === 12}>
              <div className="button-wrapper">
                <Line />
                <MoreButton onClick={moreButton}>
                  {simiarLimit === 12 ? <IoChevronDownSharp /> : <IoChevronUpSharp />}
                </MoreButton>
              </div>
            </MoreWrapper>
          )}
        </>
      ) : (
        <Message>
          <span>"{isMovie ? detailResult.title : detailResult.name}"</span>와 비슷한
          콘텐츠는 없습니다.
        </Message>
      )}
    </SimilarBlock>
  );
};

SimilarWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  simiarLimit: PropTypes.number.isRequired,
  moreButton: PropTypes.func.isRequired,
};

export default SimilarWrapper;
