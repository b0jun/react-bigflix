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

  & > .img-wrapper {
    position: relative;
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
    background: rgba(24, 24, 24, 0.8);
  }
`;

const BackDrop = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;

const BackDropBottom = styled.div`
  position: absolute;
  bottom: 0;
  padding: 2rem;
  width: 100%;
  background: linear-gradient(
    to top,
    rgba(24, 24, 24, 1) 0%,
    rgba(24, 24, 24, 0.5) 50%,
    rgba(24, 24, 24, 0) 100%
  );
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    font-size: 2.5rem;
  }
`;

const DetailItem = styled.div`
  width: 100px;
  height: 100px;
  background: green;
`;

export { DetailModalBlock, CloseButton, BackDrop, BackDropBottom, Title, DetailItem };
