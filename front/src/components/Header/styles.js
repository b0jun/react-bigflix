import styled, { css } from 'styled-components';

const HeaderBlock = styled.div`
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background: rgb(20, 20, 20);
  transition: all 500ms ease;

  #logo {
    width: 90px;
    margin-right: 2rem;
  }
  ${(props) =>
    !props.current &&
    props.direction === -1 &&
    css`
      top: -4rem;
    `}

  ${(props) =>
    props.scrollY <= 0 &&
    css`
      background: linear-gradient(
        to bottom,
        rgba(20, 20, 20, 0.8) 0%,
        rgba(20, 20, 20, 0.5) 30%,
        rgba(20, 20, 20, 0) 100%
      );
      box-shadow: none;
      top: 0;
    `}
`;

const HeaderWrapper = styled.div`
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

const Menu = styled.ul`
  display: flex;
  align-items: center;
  .left {
    @media screen and (max-width: 850px) {
      display: none;
    }
  }
  #left-logo {
    display: flex;
    align-items: center;
    @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
      display: none;
    }
  }
`;

const MenuItem = styled.li`
  font-size: 0.9rem;
  transition: all 0.3s ease;
  text-shadow: 1px 1px 2px rgba(20, 20, 20, 0.2);
  &:not(:last-child) {
    margin-right: 1.5rem;
  }
  &:hover {
    color: rgba(255, 255, 255, 0.8);
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

const RightMenu = styled.ul`
  display: flex;
  align-items: center;
`;

export { HeaderBlock, HeaderWrapper, Menu, MenuItem, RightMenu };
