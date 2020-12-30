import styled from 'styled-components';

const PosterWrapper = styled.div`
  display: flex;
  padding: 1.5rem 2rem;
  width: 100%;
  align-items: center;
  cursor: pointer;
  transition: all 100ms ease;
  border-top: 1px solid rgba(120, 120, 120, 0.3);

  &:last-child {
    border-bottom: 1px solid rgba(120, 120, 120, 0.3);
  }
  & > .img-wrapper {
    flex: 1;
  }

  & > .number {
    font-size: 1.5rem;
    font-weight: 500;
    color: #d2d2d2;
    margin-right: 1rem;
  }
  &:hover {
    background: #333333;
    border-radius: 4px;
    box-shadow: 1px 1px 1px rgba(120, 120, 120, 0.5);
  }
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
`;

const Info = styled.div`
  margin-left: 1rem;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  & > .title {
    margin-bottom: 0.7rem;
    font-size: 1rem;
    font-weight: 500;
  }
  & > .overview {
    color: rgba(120, 120, 120, 1);
    line-height: 1.2rem;
    font-size: 0.9rem;
  }
`;
export { PosterWrapper, Img, Info };
