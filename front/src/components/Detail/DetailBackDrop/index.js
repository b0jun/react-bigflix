import React from 'react';
import PropTypes from 'prop-types';
import { IoPlay } from 'react-icons/io5';
import { FlexWrapper } from '../../Common/GlobalStyles';
import SquareButton from '../../Common/SquareButton';
import { Block, BackDrop, BackDropBottom, Title } from './styles';
import { useSelector } from 'react-redux';
import ListCheck from '../../ListCheck';
import { withRouter } from 'react-router-dom';

const DetailBackDrop = ({ title, imgUrl, id, isMovie, video, history }) => {
  const { userInfo } = useSelector((state) => state.auth);

  const onVideo = () => {
    if (video !== '') {
      history.push(`/player/${video}`);
    } else {
      alert('본 컨텐츠에 제공될 영상이 없습니다.');
    }
  };

  return (
    <Block>
      <BackDrop src={imgUrl} alt={title} />
      <BackDropBottom>
        <Title>{title}</Title>
        <FlexWrapper>
          <SquareButton marginR onClick={onVideo}>
            <IoPlay />
            <p>&nbsp;재생</p>
          </SquareButton>
          {userInfo && <ListCheck contentId={id} isMovie={isMovie} />}
        </FlexWrapper>
      </BackDropBottom>
    </Block>
  );
};

DetailBackDrop.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isMovie: PropTypes.bool.isRequired,
  video: PropTypes.string.isRequired,
};

export default withRouter(DetailBackDrop);
