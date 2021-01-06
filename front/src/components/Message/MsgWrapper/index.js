import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Block = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const TextWrapper = styled.div`
  padding: 10rem 1rem 0;
  font-size: 0.8rem;
`;
const MsgWrapper = ({ children }) => {
  return (
    <Block>
      <TextWrapper>{children}</TextWrapper>
    </Block>
  );
};

MsgWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MsgWrapper;
