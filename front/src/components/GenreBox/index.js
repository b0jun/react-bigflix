import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FaCaretDown } from 'react-icons/fa';
import useYScroll from '../../hooks/useYScroll';
import { GenreBoxBlock, GenreButton, GenreDropDown, Item } from './styles';
import { Link } from 'react-router-dom';

const GenreBox = ({ genres, isMovie }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { direction } = useYScroll();

  // 모달 외 영역 클릭 시 닫기
  const modalRef = useRef();

  const handleClickOutside = useCallback(
    ({ target }) => {
      if (isOpen && modalRef.current && !modalRef.current.contains(target)) {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <GenreBoxBlock>
      <GenreButton direction={direction} onClick={onToggle}>
        <div className="text">장르</div>
        <FaCaretDown />
      </GenreButton>
      {isOpen && (
        <GenreDropDown isOpen={isOpen} ref={modalRef} isMovie={isMovie}>
          {genres.map((genre) => (
            <Link
              key={genre.id}
              to={isMovie ? `/movie/genre/${genre.id}` : `/tv/genre/${genre.id}`}
            >
              <Item>{genre.name}</Item>
            </Link>
          ))}
        </GenreDropDown>
      )}
    </GenreBoxBlock>
  );
};

GenreBox.propTypes = {
  genres: PropTypes.array.isRequired,
  isMovie: PropTypes.bool.isRequired,
};

export default GenreBox;
