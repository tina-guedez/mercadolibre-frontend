import '@testing-library/jest-dom/extend-expect';
import {
  getCondition, getItemDecimals, getCurrency, getItemPrice,
} from '../../utils/helpers';

const item = {
  id: 'MLA1117089698',
  title: 'Casco Para Moto Integral Hawk Rs11  Negro Mate Talle L ',
  price: {
    currency: 'ARS',
    amount: 12900,
    decimals: 2,
  },
  picture: 'http://http2.mlstatic.com/D_664860-MLA32942296253_112019-I.jpg',
  condition: 'new',
  free_shipping: true,
  address: 'Santa Fe',
};

describe('Pruebas para función getCurrency', () => {
  test('Devuelve formato `$` para moneda pesos', () => {
    expect(getCurrency(item)).toBe('$');
  });
  test('Devuelve un tipo de dato string', () => {
    expect(getCurrency(item)).toStrictEqual('$');
  });
});

describe('Pruebas para función getItemPrice', () => {
  it('Si es un número', () => {
    expect(getItemPrice(parseFloat(item.price.amount), 2)).not.toBeNaN();
  });
});

describe('Pruebas para función getItemDecimals', () => {
  it('Si es un número', () => {
    expect(getItemDecimals(item)).not.toBeNaN();
  });
});

describe('Pruebas para función getCondition', () => {
  test('Devuelve si la condición es nueva', () => {
    const condition = 'new';
    expect(getCondition(condition)).toBe('Nuevo');
  });
  test('Devuelve si la condición es usado', () => {
    const condition = 'no es nuevo';
    expect(getCondition(condition)).toBe('Usado');
  });
});
