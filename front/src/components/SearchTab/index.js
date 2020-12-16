import React, { useCallback, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { SearchTabBlock, SearchInput, ClearText } from './styles';
const SearchTab = () => {
  const [isOpen, setIsOpen] = useState(false); //Search탭 오픈 유무
  const inputRef = useRef(null);

  const ToggleSerachTab = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <SearchTabBlock isOpen={isOpen}>
      <FaSearch size={20} onClick={ToggleSerachTab} style={{ cursor: 'pointer' }} />
      <SearchInput ref={inputRef} isOpen={isOpen} placeholder="제목, 배우" />
      <ClearText isOpen={isOpen} />
    </SearchTabBlock>
  );
};

export default SearchTab;
