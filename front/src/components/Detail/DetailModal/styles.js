import styled from 'styled-components';

const DetailModalBlock = styled.div`
  position: relative;
  top: 2rem;
  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    top: 1rem;
  }

  width: 55rem;
  height: 100%;
  margin: 0 1rem;
  background: ${(props) => props.theme.palette.modal};
  border-radius: 5px;

  /* 스크롤 제거 */
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none; // Chrome, Safari, Opera
  }

  & > .top-wrapper {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
  }

  & > .contents-wrapper {
    padding: 2rem;
  }
`;

const CloseButton = styled.div`
  padding: 0.1rem;
  border-radius: 100%;
  background: ${(props) => props.theme.palette.modal};

  &:hover {
    background: rgba(24, 24, 24, 0.7);
  }
`;
const Item = styled.div`
  width: 100px;
  height: 100px;
  background: green;
`;

export { DetailModalBlock, CloseButton, Item };
