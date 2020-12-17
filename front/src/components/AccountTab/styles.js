import styled, { css } from 'styled-components';
import { fadeIn } from '../../styles/animation';

const Dropdown = styled.div`
  position: absolute;
  top: 2rem;
  right: 0;
  display: none;

  ul {
    background: rgba(12, 12, 12, 0.9);
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    font-size: 0.8rem;
    width: 10rem;
    padding: 1rem 0;
  }

  .line {
    background: rgba(255, 255, 255, 0.3);
    height: 1px;
    margin-bottom: 0.7rem;
  }

  .empty {
    display: flex;
    justify-content: flex-end;
    padding-right: 2rem;
    padding-top: 1rem;

    #up {
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid white;
    }
  }
`;

const DropdownButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Item = styled.li`
  padding: 0 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:not(:last-child) {
    margin-bottom: 0.7rem;
  }
`;

const AccountTabBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  #profile {
    width: 35px;
    height: 35px;
    border-radius: 20%;
    margin-right: 0.5rem;
  }

  &:hover {
    ${Dropdown} {
      display: block;
      animation: ${fadeIn} 0.3s ease-in-out;
    }
  }
`;

export { AccountTabBlock, Dropdown, DropdownButton, Item };
