import styled from 'styled-components';

const ModalStyle = styled.div`
  z-index: 1000;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
    position: absolute;
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    z-index: 50;
    width: 100%;
  }

  & > .contents-wrapper {
    padding: 2rem;
  }
`;

const CloseButton = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: ${(props) => props.theme.palette.modal};
  cursor: pointer;

  &:hover {
    background: rgba(90, 90, 90, 0.8);
  }
`;

export { ModalStyle, DetailModalBlock, CloseButton };
