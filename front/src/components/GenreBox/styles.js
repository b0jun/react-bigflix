import styled, { css } from 'styled-components';

const GenreBoxBlock = styled.div`
  position: relative;
`;

const GenreButton = styled.div`
  background: rgb(20, 20, 20);
  display: flex;
  padding: 0.6rem;
  width: 5em;
  border: 1px solid white;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background: none;
    ${(props) =>
      props.direction === -1 &&
      css`
        background: rgb(44, 44, 44);
      `}
  }

  & > .text {
    font-weight: 700;
  }
`;

const GenreDropDown = styled.div`
  position: absolute;
  background: rgb(20, 20, 20);
  width: 18rem;
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  border: 1px solid rgba(130, 130, 130, 0.9);
  box-sizing: content-box;

  transition: all 100ms ease;
  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    ${(props) =>
      props.isMovie
        ? css`
            transform: translateX(-5rem);
          `
        : css`
            transform: translateX(-10rem);
          `}
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    ${(props) =>
      props.isMovie
        ? css`
            transform: translateX(-6rem);
          `
        : css`
            transform: translateX(-12rem);
          `}
  }
`;

const Item = styled.div`
  width: 6rem;
  padding: 0.3rem;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export { GenreBoxBlock, GenreButton, GenreDropDown, Item };
