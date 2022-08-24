import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter test', () => {
  test('Deberia renderizar el componente', () => {
    render(<Counter />);

    const element = screen.getByText('0');

    expect(element).toBeInTheDocument();
  });

  test('Deberia renderizar el elemento sumado', () => {
    render(<Counter />);

    const buttonElement = screen.getByText('Incrementar');
    fireEvent.click(buttonElement);

    const element = screen.getByText('1');

    expect(element).toBeInTheDocument();
  });

  test('Deberia renderizar el elemento restado sin -1', () => {
    render(<Counter />);

    const buttonElement = screen.getByText('Restar');
    fireEvent.click(buttonElement);

    const element = screen.getByText('0');

    expect(element).toBeInTheDocument();
  });
});
