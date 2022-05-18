import styled from 'styled-components';

const ButtonStyled = styled.button`
  background: ${(props) => (props.color === 'primary' ? 'grey' : 'blue')};
  color: white;
  border: solid 1px white;
  padding: 0.5rem;
  text-align: left;
  min-width: 4rem;
`;
export default ButtonStyled;
