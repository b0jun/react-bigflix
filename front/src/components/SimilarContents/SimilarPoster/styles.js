import styled from 'styled-components';

const PosterWrapper = styled.div`
  width: calc(100% / 3 - 0.6rem);
  margin: 0 0.3rem 0.6rem;
  @media screen and (max-width: ${(props) => props.theme.similar.col2}) {
    width: calc(100% / 2 - 0.6rem);
  }
  @media screen and (max-width: ${(props) => props.theme.similar.col1}) {
    width: 100%;
    margin: 0 0 0.6rem;
  }
  z-index: 50;

  .img-wrapper {
    background: ${(props) => props.theme.palette.similar};
  }
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
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

  @media screen and (max-width: ${(props) => props.theme.similar.col2}) {
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
