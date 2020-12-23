import React from 'react';
import PropTypes from 'prop-types';
import { SubHeaderBlock, SubHeaderWrapper } from './styles';
import useYScroll from '../../hooks/useYScroll';

const SubHeader = ({ children }) => {
  const { y, direction } = useYScroll();
  return (
    <SubHeaderBlock scrollY={y} direction={direction}>
      <SubHeaderWrapper>{children}</SubHeaderWrapper>
    </SubHeaderBlock>
  );
};

SubHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubHeader;
