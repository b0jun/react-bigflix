import styled, { css } from 'styled-components';
import { fadeOut } from '../../styles/animation';

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
  width: 21rem;
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  border: 1px solid rgba(130, 130, 130, 0.9);
  box-sizing: content-box;

  transition: all 100ms ease;
  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    transform: translateX(-10rem);
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    transform: translateX(-12rem);
  }

  /* ${(props) =>
    props.isOpen &&
    css`
      display: none;
      animation: ${fadeOut} 0.3s ease-in-out;
    `} */
`;

const Item = styled.div`
  width: 7rem;
  padding: 0.3rem;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export { GenreBoxBlock, GenreButton, GenreDropDown, Item };
