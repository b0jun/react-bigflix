import styled, { css } from 'styled-components';

const TopSectionBlock = styled.div`
  position: relative;
`;

const BackDrop = styled.div`
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${(props) => `https://image.tmdb.org/t/p/original/${props.imgUrl}`});

  background-position: center center;
  background-size: cover;
  height: 40rem;

  @media screen and (max-width: ${(props) => props.theme.responsive.wide}) {
    height: 35rem;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    height: 32rem;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    height: 29rem;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    height: 27rem;
  }
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 15;
  height: 40rem;
  @media screen and (max-width: ${(props) => props.theme.responsive.wide}) {
    height: 35rem;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    height: 32rem;
    padding-top: 5rem;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    height: 29rem;
    padding: 5rem 3rem 0;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    height: 27rem;
    padding: 5rem 1rem 0;
  }

  & > .title {
    font-size: 2.5rem;
    font-weight: 700;
    text-shadow: 1px 1px 2px rgba(20, 20, 20, 0.8);
    margin-bottom: 1rem;
  }
  & > .overview {
    text-shadow: 1px 1px 2px rgba(20, 20, 20, 0.8);
    width: 40vw;
    max-width: 700px;
    line-height: 1.2rem;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
      font-size: 1rem;
    }
    @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
      width: 60vw;
      font-size: 0.9rem;
    }
    @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
      width: 70vw;
      font-size: 0.9rem;
      line-height: 1.1rem;
    }
  }
`;

const DetailButton = styled.div`
  display: flex;
  padding: 0.7rem 1.5rem;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  ${(props) =>
    props.left
      ? css`
          background: white;
          color: black;
          margin-right: 1rem;
        `
      : css`
          background: rgba(109, 109, 110, 0.7);
        `}

  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    padding: 0.6rem 1.4rem;
    font-size: 0.9rem;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    padding: 0.5rem 1.3rem;
  }
`;

export { TopSectionBlock, BackDrop, Info, DetailButton };
