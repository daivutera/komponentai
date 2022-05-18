import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyled from './Button.style';

const Button = ({ children, type, color, handleClick }) => {
  return (
    <ButtonStyled color={color} type={type} onClick={handleClick}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
};

export default Button;
