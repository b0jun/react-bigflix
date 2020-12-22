import React from 'react';
import { Wrapper } from './styles';
import MoonLoader from 'react-spinners/MoonLoader';
const Spinner = () => {
  return (
    <Wrapper>
      <MoonLoader size={70} color={'#ff4646'} />
    </Wrapper>
  );
};

export default Spinner;
