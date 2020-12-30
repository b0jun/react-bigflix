import styled, { css } from 'styled-components';

const SquareBlock = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  display: flex;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.7rem 1.5rem;
  border-radius: 5px;

  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    padding: 0.5rem 1rem;
  }

  ${(props) =>
    props.gray &&
    css`
      background: rgba(110, 110, 110, 0.7);
      color: white;
    `}

  ${(props) =>
    props.marginR &&
    css`
      margin-right: 1rem;
    `}

  &:hover {
    opacity: 0.8;
  }
`;

export { SquareBlock };
