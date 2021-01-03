import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  SeasonBlock,
  Title,
  ContentsWrapper,
  SeasonBoxBlock,
  SeasonButton,
  SeasonDropDown,
  Item,
} from './styles';
import { FaCaretDown } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { changeSeasonNumber } from '../../../redux/reducers/contentsReducer';
import { LOAD_SEASON_REQUEST } from '../../../redux/type';

const SeasonWrapper = ({ children, seasons }) => {
  const [visible, setVisible] = useState(false);
  const onToggle = () => {
    setVisible((prev) => !prev);
  };

  const { seasonResults, seasonNumber, detailResult } = useSelector(
    (state) => state.contents
  );
  const dispatch = useDispatch();

  const onChangeSeasonNumber = useCallback(
    (seasonNumber) => {
      dispatch(changeSeasonNumber(seasonNumber));
      setVisible(false);
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch({
      type: LOAD_SEASON_REQUEST,
      data: { id: detailResult.id, seasonNumber },
    });
  }, [dispatch, detailResult.id, seasonNumber]);

  // 모달 외 영역 클릭 시 닫기
  const modalRef = useRef();

  const handleClickOutside = useCallback(
    ({ target }) => {
      if (visible && modalRef.current && !modalRef.current.contains(target)) {
        setVisible(false);
      }
    },
    [visible]
  );

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <SeasonBlock>
      <div className="top-wrapper">
        <Title>회차</Title>
        <SeasonBoxBlock>
          <SeasonButton visible={visible} onClick={onToggle}>
            {seasonResults && <div className="text">{seasonResults.name}</div>}
            <FaCaretDown className="season-icon" />
          </SeasonButton>
          {visible && (
            <SeasonDropDown ref={modalRef}>
              {seasons[0].season_number === 0
                ? seasons.slice(1).map((season) => (
                    <Item
                      key={season.id}
                      onClick={() => onChangeSeasonNumber(season.season_number)}
                    >
                      <span>{season.name}</span>({season.episode_count}개 에피소드)
                    </Item>
                  ))
                : seasons.map((season) => (
                    <Item
                      key={season.id}
                      onClick={() => onChangeSeasonNumber(season.season_number)}
                    >
                      <span>{season.name}</span>({season.episode_count}개 에피소드)
                    </Item>
                  ))}
            </SeasonDropDown>
          )}
        </SeasonBoxBlock>
      </div>
      <ContentsWrapper>{children}</ContentsWrapper>
    </SeasonBlock>
  );
};

SeasonWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  seasons: PropTypes.array.isRequired,
};

export default SeasonWrapper;
