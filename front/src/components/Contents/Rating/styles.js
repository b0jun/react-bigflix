import styled from 'styled-components';

const RatingBlock = styled.div`
  display: flex;
  .rating-wrapper {
    width: 100px;
    @media screen and (max-width: ${(props) => props.theme.responsive.wide}) {
      width: 90px;
    }
    @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
      width: 80px;
    }
    @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
      width: 70px;
    }
    height: 25px;
    position: relative;
  }
`;

const StarOutline = styled.div`
  position: absolute;
  width: 100%;
  height: 25px;
  white-space: nowrap;
  display: flex;
  align-items: center;
`;

const StarFill = styled.div`
  // width: Poster에서 설정
  position: absolute;
  height: 25px;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  align-items: center;
`;

const StarImg = styled.img`
  width: 20px;
  @media screen and (max-width: ${(props) => props.theme.responsive.wide}) {
    width: 18px;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    width: 16px;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    width: 14px;
  }
  margin: 0;
`;
const Score = styled.span`
  font-size: 1.2rem;
  @media screen and (max-width: ${(props) => props.theme.responsive.wide}) {
    font-size: 1rem;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    font-size: 0.8rem;
  }
  width: 20px;
  margin-left: 0.2rem;
  line-height: 25px;
`;

export { RatingBlock, StarOutline, StarFill, StarImg, Score };
