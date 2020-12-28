import styled from 'styled-components';

const SimilarBlock = styled.div`
  position: relative;
`;
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const MoreWrapper = styled.div`
  position: absolute;
  bottom: 0;
  background: linear-gradient(
    to top,
    rgba(24, 24, 24, 1) 0%,
    rgba(24, 24, 24, 1) 70%,
    rgba(24, 24, 24, 0.9) 80%,
    rgba(24, 24, 24, 0) 100%
  );
  width: 100%;
  height: 20rem;

  & > .button-wrapper {
    width: 100%;
    padding-top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Line = styled.div`
  background: rgba(120, 120, 120, 0.8);
  width: 100%;
  height: 2px;
`;

const MoreButton = styled.div`
  cursor: pointer;
  position: absolute;
  background: rgba(110, 110, 110, 0.3);
  border: 2px solid rgba(140, 140, 140, 0.9);
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.5rem;

  &:hover {
    background: rgba(110, 110, 110, 0.8);
  }
`;

export { SimilarBlock, Title, ContentsWrapper, MoreWrapper, MoreButton, Line };
