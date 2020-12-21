import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { SectionBlock, Title, ContentsWrapper, Contents, ScrollButton } from './styles';

const ANIM_DURATION = 300;
const FRAME_TIME = 10;

const Section = ({ children, title }) => {
  const SliderRef = useRef(null);
  const [itemScroll, setItemScroll] = useState(0);
  const [isHideLeft, setIsHideLeft] = useState(true);
  const [isHideRight, setIsHideRight] = useState(false);

  const getPageSize = () => {
    return SliderRef.current.offsetWidth;
  };

  const getRecorrectScrollByProgress = (stepSize, pageSize, scrolled) => {
    const progress = scrolled / pageSize;
    if (progress > 0.98) {
      return Math.ceil(stepSize * 0.02);
    } else if (progress > 0.96) {
      return Math.ceil(stepSize * 0.06);
    } else if (progress > 0.93) {
      return Math.ceil(stepSize * 0.12);
    } else if (progress > 0.9) {
      return Math.ceil(stepSize * 0.2);
    } else if (progress > 0.8) {
      return Math.ceil(stepSize * 0.4);
    } else if (progress > 0.7) {
      return Math.ceil(stepSize * 0.6);
    } else if (progress > 0.6) {
      return Math.ceil(stepSize * 0.8);
    } else {
      return stepSize;
    }
  };

  const smoothScrollToLeft = (stepSize, target, pageSize) => {
    if (SliderRef.current.scrollLeft > target) {
      const scroll = getRecorrectScrollByProgress(stepSize, pageSize, itemScroll) - 1;
      const posX = SliderRef.current.scrollLeft + scroll;
      SliderRef.current.scrollLeft = posX;
      setItemScroll(itemScroll + scroll);
      setTimeout(() => {
        smoothScrollToLeft(stepSize, target, pageSize);
      }, FRAME_TIME);
    } else {
      refreshButtonHide();
    }
  };
  const smoothScrollToRight = (stepSize, target, pageSize) => {
    if (SliderRef.current.scrollLeft < target) {
      const scroll = getRecorrectScrollByProgress(stepSize, pageSize, itemScroll);
      const posX = SliderRef.current.scrollLeft + scroll;
      SliderRef.current.scrollLeft = posX;
      setItemScroll(itemScroll + scroll);

      setTimeout(() => {
        smoothScrollToRight(stepSize, target, pageSize);
      }, FRAME_TIME);
    } else {
      refreshButtonHide();
    }
  };
  const clickLeft = () => {
    let pageSize = 0 - getPageSize();
    const limit = 0;
    let target = pageSize + SliderRef.current.scrollLeft;
    if (target < limit) {
      const dist = limit - target;
      pageSize = pageSize + dist;
      target = limit;
    }
    const stepSize = Math.ceil(pageSize / (ANIM_DURATION / FRAME_TIME)) - 1;
    setItemScroll(0);
    smoothScrollToLeft(stepSize, target, pageSize);
  };

  const clickRight = () => {
    let pageSize = getPageSize();
    const limit = SliderRef.current.scrollWidth - SliderRef.current.offsetWidth;
    let target = pageSize + SliderRef.current.scrollLeft;
    if (target > limit) {
      const dist = target - limit;
      pageSize = pageSize - dist;
      target = limit;
    }
    const stepSize = Math.ceil(pageSize / (ANIM_DURATION / FRAME_TIME));
    setItemScroll(0);
    smoothScrollToRight(stepSize, target, pageSize);
  };

  const refreshButtonHide = () => {
    const scrollLeft = SliderRef.current.scrollLeft;
    const isHideLeft = scrollLeft === 0;
    const isHideRight =
      scrollLeft + SliderRef.current.offsetWidth >= SliderRef.current.scrollWidth;
    setIsHideLeft(isHideLeft);
    setIsHideRight(isHideRight);
  };
  return (
    <SectionBlock>
      <Title>{title}</Title>
      <ContentsWrapper>
        <Contents ref={SliderRef}>{children}</Contents>
        <ScrollButton isLeft isHideLeft={isHideLeft} onClick={clickLeft}>
          <div className="arrow left" />
        </ScrollButton>
        <ScrollButton isHideRight={isHideRight} onClick={clickRight}>
          <div className="arrow right" />
        </ScrollButton>
      </ContentsWrapper>
    </SectionBlock>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
