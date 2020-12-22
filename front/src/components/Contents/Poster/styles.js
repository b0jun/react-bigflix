import styled from 'styled-components';
import { fadeIn } from '../../../styles/animation';

const DetailWrapper = styled.div`
  position: absolute;
  bottom: 0;
  opacity: 0;
  z-index: 3;
  width: 100%;
  height: 70%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 1) 10%,
    rgba(0, 0, 0, 0.8) 25%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0.4) 75%,
    rgba(0, 0, 0, 0.3) 90%,
    rgba(0, 0, 0, 0) 100%
  );

  padding: 4rem 2rem 0;
  display: flex;
  flex-direction: column;
  & > .title {
    font-weight: 700;
    font-size: 1.1rem;
  }
  & > .year {
    font-size: 1rem;
  }
  & > .detail-item {
    margin-bottom: 0.5rem;
  }
  & > .genres {
    font-size: 1rem;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.wide}) {
    padding-top: 3.5rem;
    & > .title {
      font-size: 1rem;
    }
    & > .year {
      font-size: 0.9rem;
    }
    & > .detail-item {
      margin-bottom: 0.4rem;
    }
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    padding-top: 3rem;
    & > .title {
      font-size: 0.9rem;
    }
    & > .detail-item {
      margin-bottom: 0.3rem;
    }
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    padding-top: 2.5rem;
    & > .year {
      font-size: 0.8rem;
    }
    & > .detail-item {
      margin-bottom: 0.3rem;
    }
    & > .genres {
      font-size: 0.9rem;
    }
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    padding-top: 2rem;
    & > .title {
      font-size: 0.8rem;
    }
    & > .genres {
      font-size: 0.8rem;
    }
  }
`;

const PosterBlock = styled.div`
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
  position: relative;
  display: flex;
  flex: 1;
  height: 20rem;

  transition: all 0.3s;
  z-index: 1;
  margin: 0.1rem;
  border-radius: 5px;
  .poster_img {
    height: 100%;
    z-index: 1;
    border-radius: 5px;
  }
  .star-fill {
    width: 0;
    transition: width 1000ms ease-out;
  }
  &:hover {
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
    .star-fill {
      width: ${(props) => props.rating * 10}%;
    }
    flex: 1;
    margin-left: -2%;
    margin-right: -2%;
    z-index: 2;
    ${DetailWrapper} {
      opacity: 1;
      animation: ${fadeIn} 300ms ease-in-out;
    }
  }
`;

export { PosterBlock, DetailWrapper };
