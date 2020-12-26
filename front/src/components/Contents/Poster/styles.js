import styled from 'styled-components';
import { fadeIn } from '../../../styles/animation';

const DetailWrapper = styled.div`
  position: absolute;
  bottom: 0;
  opacity: 0;
  z-index: 3;
  height: 75%;
  width: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 1) 10%,
    rgba(0, 0, 0, 0.8) 25%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0.4) 75%,
    rgba(0, 0, 0, 0.3) 90%,
    rgba(0, 0, 0, 0) 100%
  );

  padding: 0 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
    color: #b8b0b0;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.wide}) {
    padding: 0 2rem 1.5rem;
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
    padding: 0 2rem 1rem;
    & > .title {
      font-size: 0.9rem;
    }
    & > .detail-item {
      margin-bottom: 0.3rem;
    }
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
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
    & > .title {
      font-size: 0.8rem;
    }
    & > .genres {
      font-size: 0.8rem;
    }
  }
`;

const PosterBlock = styled.div`
  height: 20rem;
  width: calc(20rem * (2 / 3));

  @media screen and (max-width: ${(props) => props.theme.responsive.wide}) {
    height: 18rem;
    width: calc(18rem * (2 / 3));
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    height: 16rem;
    width: calc(16rem * (2 / 3));
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    height: 14rem;
    width: calc(14rem * (2 / 3));
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    height: 13rem;
    width: calc(13rem * (2 / 3));
  }
  position: relative;
  display: flex;
  flex: 1;
  z-index: 1;
  margin: 0.1rem;
  border-radius: 5px;
  transition: all 0.3s;

  .poster_img {
    height: 20rem;
    width: calc(20rem * (2 / 3));
    @media screen and (max-width: ${(props) => props.theme.responsive.wide}) {
      height: 18rem;
      width: calc(18rem * (2 / 3));
    }
    @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
      height: 16rem;
      width: calc(16rem * (2 / 3));
    }
    @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
      height: 14rem;
      width: calc(14rem * (2 / 3));
    }
    @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
      height: 13rem;
      width: calc(13rem * (2 / 3));
    }
    z-index: 1;
    border-radius: 5px;
    transition: all 0.3s;
  }

  .star-fill {
    width: 0;
    transition: width 1000ms ease-out;
  }

  &:hover {
    height: 23rem;
    width: calc(23rem * (2 / 3));
    .poster_img {
      height: 23rem;
      width: calc(23rem * (2 / 3));
    }
    @media screen and (max-width: ${(props) => props.theme.responsive.wide}) {
      height: 21rem;
      width: calc(21rem * (2 / 3));
      .poster_img {
        height: 21rem;
        width: calc(21rem * (2 / 3));
      }
    }
    @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
      height: 19rem;
      width: calc(19rem * (2 / 3));
      .poster_img {
        height: 19rem;
        width: calc(19rem * (2 / 3));
      }
    }
    @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
      height: 17rem;
      width: calc(17rem * (2 / 3));
      .poster_img {
        height: 17rem;
        width: calc(17rem * (2 / 3));
      }
    }
    @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
      height: 16rem;
      width: calc(16rem * (2 / 3));
      .poster_img {
        height: 16rem;
        width: calc(16rem * (2 / 3));
      }
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

const ButtonWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
`;

const Item = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(20, 20, 20, 0.6);
  border: 2px solid rgba(130, 130, 130, 0.3);
  border-radius: 100%;
  width: 3rem;
  height: 3rem;
  transition: all 200ms ease;

  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    width: 2.5rem;
    height: 2.5rem;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    background: rgba(110, 110, 110, 0.7);
    border: 2px solid white;
  }
`;

export { PosterBlock, DetailWrapper, ButtonWrapper, Item };
