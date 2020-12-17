import React, { useCallback, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { SearchTabBlock, SearchInput, ClearText } from './styles';

const SearchTab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  // 검색 탭 토글
  const ToggleSerachTab = useCallback(() => {
    if (!isOpen) {
      inputRef.current.focus();
    } else {
      inputRef.current.value = '';
    }
    setIsOpen((prev) => !prev);
  }, [isOpen]);

  // 포커스 아웃
  const onFocusOut = (e) => {
    if (e.target.value === '') {
      setIsOpen((prev) => !prev);
    }
  };

  const onClearText = () => {
    inputRef.current.value = '';
  };
  return (
    <SearchTabBlock isOpen={isOpen}>
      <FaSearch size={20} onClick={ToggleSerachTab} style={{ cursor: 'pointer' }} />
      <SearchInput
        ref={inputRef}
        isOpen={isOpen}
        placeholder="제목, 배우"
        onBlur={onFocusOut}
      />
      <ClearText isOpen={isOpen} onClick={onClearText} />
    </SearchTabBlock>
  );
};

export default SearchTab;
