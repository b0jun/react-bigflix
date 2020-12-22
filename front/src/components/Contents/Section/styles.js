import styled, { css } from 'styled-components';

const SectionBlock = styled.div`
  margin-bottom: 1.5rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
  margin-left: 1.5rem;
  font-weight: 700;
`;

const ContentsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Contents = styled.div`
  height: 23rem;
  @media screen and (max-width: ${(props) => props.theme.responsive.wide}) {
    height: 21rem;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    height: 19rem;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    height: 17rem;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    height: 16rem;
  }

  display: flex;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
  .poster_wrapper:first-child:hover {
    margin-left: 0.5rem;
  }

  &:hover .poster_wrapper {
    opacity: 0.3;
    &:hover {
      opacity: 1;
    }
  }
`;

const ScrollButton = styled.div`
  height: 20rem;
  @media screen and (max-width: ${(props) => props.theme.responsive.wide}) {
    height: 18rem;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    height: 16rem;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    height: 14rem;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    height: 13rem;
  }

  z-index: 4;
  position: absolute;
  width: 3rem;
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
