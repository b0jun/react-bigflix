import React from 'react';
import PropTypes from 'prop-types';
import { GoPlus } from 'react-icons/go';
import { IoPlay } from 'react-icons/io5';
import CircleButton from '../../Common/CircleButton';
import { FlexWrapper } from '../../Common/GlobalStyles';
import SquareButton from '../../Common/SquareButton';
import { Block, BackDrop, BackDropBottom, Title } from './styles';

const DetailBackDrop = ({ title, imgUrl }) => (
  <Block>
    <BackDrop src={imgUrl} alt={title} />
    <BackDropBottom>
      <Title>{title}</Title>
      <FlexWrapper>
        <SquareButton marginR>
          <IoPlay />
          <p>&nbsp;재생</p>
        </SquareButton>
        <CircleButton>
          <GoPlus />
        </CircleButton>
      </FlexWrapper>
    </BackDropBottom>
  </Block>
);

DetailBackDrop.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default DetailBackDrop;
