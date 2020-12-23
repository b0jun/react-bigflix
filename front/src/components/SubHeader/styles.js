import styled, { css } from 'styled-components';

const SubHeaderBlock = styled.div`
  z-index: 19;
  position: fixed;
  top: 4rem;
  left: 0;
  width: 100%;
  height: 4rem;
  background: rgb(20, 20, 20);
  transition: all 500ms ease;

  ${(props) =>
    props.scrollY === 0 &&
    css`
      background: none;
    `}

  ${(props) =>
    props.direction === -1 &&
    css`
      top: 0;
    `}
`;

const SubHeaderWrapper = styled.div`
  height: 100%;
  padding: 0 3rem;
  margin: 0 auto;
  display: flex;
  align-items: center;

  & > .sub-title {
    font-size: 2.3rem;
    font-weight: 700;
    text-shadow: 1px 1px 1px rgba(20, 20, 20, 0.3);
    margin-right: 2rem;
  }

  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    padding: 0 1rem;
    & > .sub-title {
      font-size: 2rem;
    }
  }
`;

export { SubHeaderBlock, SubHeaderWrapper };
