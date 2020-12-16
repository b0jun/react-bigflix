import styled, { css } from 'styled-components';

export const SearchTabBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.isOpen &&
    css`
      & {
        border: 1px solid white;
        background: rgba(12, 12, 12, 0.3);
      }
    `}
`;

export const SearchInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  width: ${(props) => (props.isOpen ? '12rem' : '0')};
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.isOpen
      ? css`
          margin-left: 0.8rem;
        `
      : css`
          margin-left: 0;
        `}
`;

export const ClearText = styled.div`
  ${(props) =>
    props.isOpen
      ? css`
          width: 30px;
          height: 30px;
          &:before,
          &:after {
            width: 26px;
            height: 4px;
          }
        `
      : css`
          width: 0;
          heigth: 0;
          &:before,
          &:after {
            width: 0px;
            height: 0px;
          }
        `}
  position: relative;
  border-radius: 6px;
  cursor: pointer;
  &:before,
  &:after {
    content: '';
    position: absolute;
    transition: width 1s ease-in-out;
    background-color: white;
    border-radius: 2px;
    top: 14px;
  }
  &:before {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
    left: 2px;
  }
  &:after {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    transform: rotate(-45deg);
    right: 2px;
  }
`;
