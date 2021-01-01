import React from 'react';
import { Block, Inner } from './styles';

const Wrapper = ({ children }) => {
  return (
    <Block>
      <Inner>{children}</Inner>
    </Block>
  );
};

export default Wrapper;
