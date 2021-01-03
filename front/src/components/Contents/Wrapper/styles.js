import styled from 'styled-components';

const Block = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 2rem;
  width: 108rem;
  @media screen and (max-width: ${(props) => props.theme.column.col5}) {
    width: 91rem;
  }
  @media screen and (max-width: ${(props) => props.theme.column.col4}) {
    justify-content: center;
  }
`;

export { Block, Inner };
