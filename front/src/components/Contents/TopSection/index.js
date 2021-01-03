import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { BackDrop, TopSectionBlock, Info } from './styles';
import { MdInfoOutline } from 'react-icons/md';
import { FlexWrapper } from '../../Common/GlobalStyles';
import { IoPlay } from 'react-icons/io5';
import SquareButton from '../../Common/SquareButton';
import noBackdrop from '../../../static/images/noBackdrop.png';
import ModalPortal from '../../../lib/ModalPortal';
import DetailModal from '../../Detail/DetailModal';
import { useDispatch } from 'react-redux';
import { CLEAR_DETAIL } from '../../../redux/type';

const TopSection = ({ id, imgUrl, title, overview, isMovie }) => {
  const [visible, setVisble] = useState(false);
  const dispatch = useDispatch();

  const onOpenModal = () => {
    setVisble(true);
  };

  const onCloseModal = useCallback(() => {
    setVisble(false);
    dispatch({ type: CLEAR_DETAIL }); // 모달 닫으면 콘텐츠 지우기
  }, [dispatch]);

  return (
    <>
      <TopSectionBlock>
        <BackDrop imgUrl={imgUrl ? imgUrl : noBackdrop} />
        <Info>
          <div className="title">{title}</div>
          <div className="overview">
            &nbsp;{overview.length > 250 ? `${overview.substring(0, 250)}...` : overview}
          </div>
          <FlexWrapper>
            <SquareButton marginR>
              <IoPlay />
              <p>&nbsp;재생</p>
            </SquareButton>
            <SquareButton gray onClick={onOpenModal}>
              <MdInfoOutline />
              <p>&nbsp;상세 정보</p>
            </SquareButton>
          </FlexWrapper>
        </Info>
      </TopSectionBlock>
      {visible && (
        <ModalPortal>
          <DetailModal id={id} isMovie={isMovie} onClose={onCloseModal} />
        </ModalPortal>
      )}
    </>
  );
};

TopSection.propTypes = {
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  isMovie: PropTypes.bool.isRequired,
};

export default TopSection;
