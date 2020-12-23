import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderBlock, HeaderWrapper, Menu, MenuItem, RightMenu } from './styles';
import logo from '../../static/images/logo.png';
import SearchTab from '../SearchTab';
import AccountTab from '../AccountTab';
import { Link, withRouter } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu';
import AuthModal from '../AuthModal';
import useYScroll from '../../hooks/useYScroll';
const Header = ({ location: { pathname } }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const { y, direction } = useYScroll();
  return (
    <HeaderBlock current={pathname === '/'} scrollY={y} direction={direction}>
      <HeaderWrapper>
        <Menu>
          <BurgerMenu />
          <Link id="left-logo" to="/">
            <img id="logo" src={logo} alt="bigflix_logo" />
          </Link>
          <MenuItem className="left" current={pathname === '/'}>
            <Link to="/">홈</Link>
          </MenuItem>
          <MenuItem className="left" current={pathname === '/tv'}>
            <Link to="/tv">TV 프로그램</Link>
          </MenuItem>
          <MenuItem className="left" current={pathname === '/movie'}>
            <Link to="/movie">영화</Link>
          </MenuItem>
          {userInfo && (
            <MenuItem className="left" current={pathname === '/mylist'}>
              <Link to="/mylist">내가 찜한 콘텐츠</Link>
            </MenuItem>
          )}
        </Menu>
        <RightMenu>
          <MenuItem>
            <SearchTab />
          </MenuItem>
          <MenuItem>{userInfo ? <AccountTab /> : <AuthModal />}</MenuItem>
        </RightMenu>
      </HeaderWrapper>
    </HeaderBlock>
  );
};

export default withRouter(Header);
