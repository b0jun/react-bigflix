import React, { useCallback } from 'react';
import { IoCaretDown } from 'react-icons/io5';
import { AccountTabBlock, DropdownButton, Dropdown, Item } from './styles';
import profile from '../../static/images/profile.png';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT_REQUEST } from '../../redux/type';

const AccountTab = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const onLogout = useCallback(() => {
    dispatch({
      type: LOGOUT_REQUEST,
    });
  }, [dispatch]);

  return (
    <AccountTabBlock>
      <DropdownButton>
        <img id="profile" src={profile} alt="profile" />
        <IoCaretDown />
      </DropdownButton>
      <Dropdown>
        <div className="empty">
          <div id="up" />
        </div>
        <ul>
          <Item>{userInfo.nickname && userInfo.nickname}</Item>
          <Item>프로필 관리</Item>
          <div className="line" />
          <Item>계정</Item>
          <Item>고객센터</Item>
          <Item onClick={onLogout}>Bigflix에서 로그아웃</Item>
        </ul>
      </Dropdown>
    </AccountTabBlock>
  );
};

export default AccountTab;
