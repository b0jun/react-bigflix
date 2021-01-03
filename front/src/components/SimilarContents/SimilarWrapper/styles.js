import styled, { css } from 'styled-components';

const SimilarBlock = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.3rem;
  @media screen and (max-width: ${(props) => props.theme.similar.col1}) {
    margin: 0;
  }
`;

const MoreWrapper = styled.div`
  position: absolute;
  z-index: 51;
  background: linear-gradient(
    to top,
    rgba(24, 24, 24, 1) 0%,
    rgba(24, 24, 24, 1) 70%,
    rgba(24, 24, 24, 0.9) 80%,
    rgba(24, 24, 24, 0) 100%
  );
  width: 100%;
  height: 20rem;

  ${(props) =>
    props.isMore
      ? css`
          bottom: 0rem;
          z-index: 51;
        `
      : css`
          bottom: -16.5rem;
          z-index: 49;
        `}

  & > .button-wrapper {
    width: 100%;
    padding-top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Line = styled.div`
  background: rgba(120, 120, 120, 0.8);
  width: 100%;
  height: 2px;
`;

const MoreButton = styled.div`
  cursor: pointer;
  position: absolute;
  background: rgba(110, 110, 110, 0.3);
  border: 2px solid rgba(140, 140, 140, 0.9);
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.5rem;

  &:hover {
    background: rgba(110, 110, 110, 0.8);
  }

  & > .similar-icon {
    transition: transform 200ms ease-in-out;
  }
  ${(props) =>
    props.visible &&
    css`
      & > .similar-icon {
        transform: rotate(0.5turn);
      }
    `}
`;

const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  height: 7rem;
  margin-bottom: 4rem;
  color: rgb(120, 120, 120);
  & > span {
    font-weight: 700;
  }
`;

export { SimilarBlock, Title, ContentsWrapper, MoreWrapper, MoreButton, Line, Message };
