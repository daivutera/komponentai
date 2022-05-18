import React from 'react';
import PropTypes from 'prop-types';
import TagStyled from './Tag.style';

const Tag = ({ children, color }) => {
  return <TagStyled color={color}>{children}</TagStyled>;
};

Tag.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Tag;
