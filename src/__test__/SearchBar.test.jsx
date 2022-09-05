import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar/SearchBar';

describe('Pruebas en el componente SearchBar', () => {
  // eslint-disable-next-line jest/expect-expect
  it('Si tiene el placeholder esperado', () => {
    const component = render(<SearchBar />);
    const texto = 'Nunca dejes de buscar';
    component.getByPlaceholderText(texto);
  });
  it('Si hace match con el snapshot', () => {
    const { container } = render(<SearchBar />);
    expect(container).toMatchSnapshot();
  });
  test('Cambio de valor en casilla de texto', () => {
    render(<SearchBar />);
    const input = screen.getByLabelText('Ingresa el producto a buscar');
    fireEvent.input(input, { target: { value: 'Termo' } });
    expect(input.value).toBe('Termo');
  });
});
