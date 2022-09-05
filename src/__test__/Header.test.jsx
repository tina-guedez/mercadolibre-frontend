import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Header from '../components/Header/Header';

describe('Pruebas en el componente Header', () => {
  test('Verifica que el componente se renderice', () => {
    const { container } = render(<Router><Header /></Router>);
    expect(container.outerHTML).not.toBeUndefined();
  });
  it('Si hace match con el snapshot', () => {
    const { container } = render(<Router><Header /></Router>);
    expect(container).toMatchSnapshot();
  });
});
