import styled from 'styled-components';

const Block = styled.div`
  position: relative;
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
export { Block, BackDrop, BackDropBottom, Title };
