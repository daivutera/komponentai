import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button renders successfully pavadinimas', () => {
  it('button matches snapshot ir tada po to apsirasom snapshot testa', () => {
    const view = render(<Button>text</Button>);
    expect(view).toMatchSnapshot();
  });
});
