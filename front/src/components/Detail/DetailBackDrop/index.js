import React from 'react';
import PropTypes from 'prop-types';
import { IoPlay } from 'react-icons/io5';
import { FlexWrapper } from '../../Common/GlobalStyles';
import SquareButton from '../../Common/SquareButton';
import { Block, BackDrop, BackDropBottom, Title } from './styles';
import { useSelector } from 'react-redux';
import ListCheck from '../../ListCheck';

const DetailBackDrop = ({ title, imgUrl, id, isMovie }) => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <Block>
      <BackDrop src={imgUrl} alt={title} />
      <BackDropBottom>
        <Title>{title}</Title>
        <FlexWrapper>
          <SquareButton marginR>
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
};

export default DetailBackDrop;
