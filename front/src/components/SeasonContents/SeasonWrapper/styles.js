import styled, { css } from 'styled-components';

const SeasonBlock = styled.div`
  margin-bottom: 5rem;
  .top-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

const SeasonBoxBlock = styled.div`
  position: relative;
  background: #242424;
`;
const SeasonButton = styled.div`
  display: flex;
  font-size: 1.2rem;
  border: 1px solid #4d4d4d;
  border-radius: 4px;
  padding: 0.7rem 1rem;
  cursor: pointer;
  & > .text {
    margin-right: 2rem;
  }
  & > .season-icon {
    transition: transform 200ms ease-in-out;
  }
  ${(props) =>
    props.visible &&
    css`
      & > .season-icon {
        transform: rotate(0.5turn);
      }
    `}
`;
const SeasonDropDown = styled.div`
  position: absolute;
  background: #242424;
  padding: 0.5rem 0.05rem;
  border: 1px solid #4d4d4d;
  right: 0;
  max-height: 10rem;
  z-index: 20;
  white-space: nowrap;
  overflow-y: auto;

  &::-webkit-scrollbar {
    background: #242424;
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(128, 128, 128, 0.8);
    border-radius: 10px;
    height: 3rem;
  }
`;
const ContentsWrapper = styled.div``;

const Item = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  font-size: 0.9rem;
  &:hover {
    background: #424242;
  }

  & > span {
    margin-right: 0.3rem;
    font-weight: 700;
    font-size: 1.1rem;
  }
`;
export {
  SeasonBlock,
  Title,
  SeasonBoxBlock,
  SeasonButton,
  SeasonDropDown,
  ContentsWrapper,
  Item,
};
