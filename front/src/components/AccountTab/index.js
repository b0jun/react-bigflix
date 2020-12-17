import React from 'react';
import { IoCaretDown } from 'react-icons/io5';
import { AccountTabBlock, DropdownButton, Dropdown, Item } from './styles';
import profile from '../../static/images/profile.png';

const AccountTab = () => {
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
          <Item>닉네임</Item>
          <Item>프로필 관리</Item>
          <div className="line" />
          <Item>계정</Item>
          <Item>고객센터</Item>
          <Item>Bigflix에서 로그아웃</Item>
        </ul>
      </Dropdown>
    </AccountTabBlock>
  );
};

export default AccountTab;
