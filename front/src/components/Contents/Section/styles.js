import styled, { css } from 'styled-components';

const SectionBlock = styled.div`
  margin-bottom: 1rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
  margin-left: 1.5rem;
`;

const ContentsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Contents = styled.div`
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  .poster_wrapper:first-child:hover {
    margin-left: 2.1rem;
  }

  .poster_wrapper:last-child:hover {
    margin-right: 1.5rem;
  }

  &:hover .poster_wrapper {
    opacity: 0.3;
    &:hover {
      opacity: 1;
      .poster_img {
        transform: scale(1.3);
      }
    }
  }
`;

const ScrollButton = styled.div`
  z-index: 11;
  position: absolute;
  width: 3rem;
  height: calc(27rem * 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${(props) =>
    props.isLeft
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}
  ${(props) =>
    props.isLeft &&
    props.isHideLeft &&
    css`
      display: none;
    `}
    ${(props) =>
    !props.isLeft &&
    props.isHideRight &&
    css`
      display: none;
    `}
  &:hover {
    background: rgba(26, 26, 26, 0.6);
    transition: background 0.5s;
    .arrow {
      border-width: 0 4px 4px 0;
      padding: 6px;
    }
  }

  .arrow {
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;
    transition: all 10ms ease-in-out;
  }
  .right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }

  .left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }
`;

export { SectionBlock, Title, ContentsWrapper, Contents, ScrollButton };
