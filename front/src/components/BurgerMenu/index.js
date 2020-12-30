import React from 'react';
import { useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BurgerMenuBlock, Hamburger, Dropdown, Item } from './styles';

const BurgerMenu = ({ location: { pathname } }) => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <BurgerMenuBlock>
      <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger>
      <Dropdown>
        <div className="empty">
          <div id="up" />
        </div>
        <ul>
          <Link to="/">
            <Item current={pathname === '/'}>홈</Item>
          </Link>
          <Link to="/tv">
            <Item current={pathname === '/tv'}>TV 프로그램</Item>
          </Link>
          <Link to="/movie">
            <Item current={pathname === '/movie'}>영화</Item>
          </Link>
          {userInfo && (
            <Link to="/mylist">
              <Item current={pathname === '/mylist'}>내가 찜한 콘텐츠</Item>
            </Link>
          )}
        </ul>
      </Dropdown>
    </BurgerMenuBlock>
  );
};

BurgerMenu.propTypes = {
  pathname: PropTypes.string,
};

export default withRouter(BurgerMenu);
