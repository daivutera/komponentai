import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Accordion.style';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Accordion>
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.Icon
          icon={isOpen ? faAngleUp : faAngleDown}
          onClick={() => setIsOpen(!isOpen)}
          data-testid='abc'
        />
      </S.Header>

      {isOpen && <S.Content>{content}</S.Content>}
    </S.Accordion>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Accordion;
