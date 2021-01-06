import React from 'react';
import PropTypes from 'prop-types';
import MsgWrapper from '../MsgWrapper';
import { Text } from './styles';

const NormalMessage = ({ value }) => (
  <MsgWrapper>
    <Text>{value}</Text>
  </MsgWrapper>
);

NormalMessage.propTypes = {
  value: PropTypes.string.isRequired,
};

export default NormalMessage;
