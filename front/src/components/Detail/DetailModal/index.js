import React from 'react';
import PropTypes from 'prop-types';
import { CloseButton, DetailModalBlock, Item } from './styles';
import { IoClose } from 'react-icons/io5';

const DetailModal = ({ id, isMovie, onClose }) => {
  return (
    <DetailModalBlock>
      <div className="top-wrapper">
        <CloseButton onClick={onClose}>
          <IoClose size={30} />
        </CloseButton>
      </div>
      <div className="contents-wrapper">
        <Item>{id}</Item>
        <Item>{isMovie ? 'true' : 'false'}</Item>
        <Item>TEMP</Item>
        <Item>TEMP</Item>
        <Item>TEMP</Item>
        <Item>TEMP</Item>
        <Item>TEMP</Item>
        <Item>TEMP</Item>
        <Item>TEMP</Item>
        <Item>TEMP</Item>
        <Item>TEMP</Item>
        <Item>TEMP</Item>
        <Item>TEMP</Item>
        <Item>TEMP</Item>
      </div>
    </DetailModalBlock>
  );
};

DetailModal.propTypes = {
  id: PropTypes.number.isRequired,
  isMovie: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DetailModal;
