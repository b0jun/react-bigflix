import React from 'react';
import { HeaderBlock, HeaderWrapper, Menu, MenuItem, RightMenu } from './styles';
import logo from '../../static/images/logo.png';
import SearchTab from '../SearchTab';
const Header = () => {
  return (
    <HeaderBlock>
      <HeaderWrapper>
        <Menu>
          <img id="logo" src={logo} alt="bigflix_logo" />
          <MenuItem>홈</MenuItem>
          <MenuItem>TV 프로그램</MenuItem>
          <MenuItem>영화</MenuItem>
          <MenuItem>내가 찜한 콘텐츠</MenuItem>
        </Menu>
        <RightMenu>
          <MenuItem>
            <SearchTab />
          </MenuItem>
          <MenuItem>프로필탭</MenuItem>
        </RightMenu>
      </HeaderWrapper>
    </HeaderBlock>
  );
};

export default Header;
