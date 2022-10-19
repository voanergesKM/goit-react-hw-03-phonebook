import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = ({ text, onClick, type }) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
