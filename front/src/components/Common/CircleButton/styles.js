import styled from 'styled-components';

const CircleBlock = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  background: rgba(20, 20, 20, 0.6);
  border: 2px solid rgba(130, 130, 130, 0.3);
  width: 3rem;
  height: 3rem;
  color: white;
  font-size: 1.2rem;
  border-radius: 50%;
  transition: all 200ms ease-in-out;

  @media screen and (max-width: ${(props) => props.theme.responsive.wide}) {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1rem;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    width: 2rem;
    height: 2rem;
    font-size: 0.9rem;
  }

  &:hover {
    background: rgba(110, 110, 110, 0.7);
    border: 2px solid white;
  }
`;

export { CircleBlock };
