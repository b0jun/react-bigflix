import styled from 'styled-components';

const PosterWrapper = styled.div`
  width: calc(100% / 3 - 0.6rem);
  @media screen and (max-width: ${(props) => props.theme.similar.col3}) {
    width: calc(100% / 2 - 0.3rem);
  }
  @media screen and (max-width: ${(props) => props.theme.similar.col2}) {
    width: 100%;
  }
  margin-bottom: 0.6rem;

  // 마지막 요소 왼쪽 정렬
  &:last-child {
    margin-right: auto;
    margin-left: 1rem;
    @media screen and (max-width: ${(props) => props.theme.similar.col3}) {
      margin-left: 0;
      margin-right: 0;
    }
  }
`;

const Img = styled.div`
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.6) 30%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${(props) => props.imgUrl});

  background-position: center center;
  background-size: cover;
  height: 10rem;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const Info = styled.div`
  background: ${(props) => props.theme.palette.similar};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 1rem 0.7rem 0;
  height: 13rem;

  & > .title {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    font-weight: 500;
  }
  & > .overview {
    color: rgba(120, 120, 120, 1);
    line-height: 1.2rem;
  }

  @media screen and (max-width: ${(props) => props.theme.similar.col3}) {
    min-height: 12rem;
    & > .title {
      font-size: 1rem;
    }
    & > .overview {
      font-size: 0.9rem;
    }
  }
`;
export { PosterWrapper, Img, Info };
