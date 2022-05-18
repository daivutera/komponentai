import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Accordion = styled.div`
  border: 0.125rem solid darkgray;
  padding: 1rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: darkgray;
  cursor: pointer;
`;

export const Content = styled.div`
  padding-top: 1rem;
`;
