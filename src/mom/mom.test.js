import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Mom from './mom.js';

test('dynamically updates money', () => {
  render(<Mom />);
  const money = screen.getByTestId('money');
  const moneyButton = screen.getByTestId('money-button');
  fireEvent.click(moneyButton);
  expect(money).toHaveTextContent(200);
});

test('begins with 100 dollars', () => {
    render(<Mom />);
    const money = screen.getByTestId('money'); // get by data-testId='money'
    const bobMoney = screen.getByTestId('bobs-money');
    expect(money).toHaveTextContent(100);
    expect(bobMoney).toHaveTextContent(0);
});

test('dynamically gets momey from mom', () => {

    render(<Mom />)
    const money = screen.getByTestId('bobs-money');
    const moneyButton = screen.getByTestId('ask-for-money');
    fireEvent.click(moneyButton);
    expect(money).toHaveTextContent(20);
  });