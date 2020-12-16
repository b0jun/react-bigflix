import styled from 'styled-components';

export const HeaderBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background: rgb(20, 20, 20);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);

  #logo {
    width: 150px;
    margin-right: 2rem;
  }
`;

export const HeaderWrapper = styled.div`
  height: 100%;
  padding: 0 2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.li`
  font-size: 1.2rem;
  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

export const RightMenu = styled.ul`
  display: flex;
  align-items: center;
`;
