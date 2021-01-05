import styled from 'styled-components';

const Result = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  span {
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const TipTitle = styled.div`
  display: inline-block;
  margin-top: 2rem;
  margin-left: 0.5rem;
  margin-bottom: 0.8rem;
  padding: 10px;
  background: white;
  color: black;
`;
const Tip = styled.p`
  line-height: 1.2rem;
`;
export { Result, TipTitle, Tip };
