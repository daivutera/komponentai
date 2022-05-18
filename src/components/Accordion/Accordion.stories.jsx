import React from 'react';
import Accordion from './Accordion';

export default {
  title: 'Accordion',
  component: Accordion,
};

export const Default = () => {
  return <Accordion title='Demo123' content='text text text' />;
};
