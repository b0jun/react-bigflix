import styled from 'styled-components';

const Block = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
`;

const Back = styled.div`
  position: absolute;
  width: 5rem;
  height: 5rem;
  z-index: 10001;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

export { Block, Back };
