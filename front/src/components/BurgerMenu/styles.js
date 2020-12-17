import styled, { css } from 'styled-components';
import { fadeIn } from '../../styles/animation';

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  margin-right: 1rem;
  cursor: pointer;
  div {
    width: 28px;
    height: 3px;
    background: #cdcdcd;
    border-radius: 3px;
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }

  @media screen and (max-width: 850px) {
    display: flex;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    margin-right: 0;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 1rem;
  left: 0;
  display: none;

  ul {
    background: rgba(12, 12, 12, 0.9);
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    font-size: 0.8rem;
    min-width: 8rem;
  }

  .empty {
    display: flex;
    padding-left: 0.3rem;
    padding-top: 1rem;

    #up {
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid rgba(255, 255, 255, 0.8);
    }
  }
`;

const BurgerMenuBlock = styled.div`
  position: relative;

  &:hover {
    ${Dropdown} {
      display: block;
      animation: ${fadeIn} 0.3s ease-in-out;
    }
  }
`;

const Item = styled.div`
  text-align: center;
  padding: 1rem;
  width: 12rem;
  cursor: pointer;
  color: #cdcdcd;
  &:hover {
    color: white;
    background: rgba(12, 12, 12, 0.1);
  }
  ${(props) =>
    props.current &&
    css`
      & {
        font-weight: 700;
        color: white;
      }
    `}
`;

export { BurgerMenuBlock, Hamburger, Dropdown, Item };
