import styled, { css } from 'styled-components';

export const HeaderBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background: rgb(20, 20, 20);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);

  #logo {
    width: 120px;
    margin-right: 2rem;
  }
`;

export const HeaderWrapper = styled.div`
  height: 100%;
  padding: 0 3rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    padding: 0 1rem;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  .left {
    @media screen and (max-width: 850px) {
      display: none;
    }
  }
  #left-logo {
    @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
      display: none;
    }
  }
`;

export const MenuItem = styled.li`
  font-size: 0.9rem;
  transition: all 0.3s ease;
  color: #cdcdcd;
  &:not(:last-child) {
    margin-right: 1.5rem;
  }
  ${(props) =>
    props.current &&
    css`
      & {
        padding-top: 0.1rem;
        font-weight: 700;
        color: white;
      }
    `}
`;

export const RightMenu = styled.ul`
  display: flex;
  align-items: center;
`;
