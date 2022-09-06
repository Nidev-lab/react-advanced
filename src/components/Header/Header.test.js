import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

const testId = 'header-test';

describe('Header Test', () => {
  test('Deberia renderizar el componente Header', () => {
    render(<Header />);
    const element = screen.getByText('Navbar');

    expect(element).toBeInTheDocument();
  });

  test('Deberia renderizar el componente Header con theme Dark', () => {
    render(<Header theme="dark" />);
    const element = screen.getByTestId(testId);

    expect(element).toHaveClass('bg-dark');
  });

  test('Deberia renderizar el componente Header con theme Dark', () => {
    const setTheme = jest.fn();

    render(<Header theme="light" setTheme={setTheme} />);
    const element = screen.getByRole('switch');

    fireEvent.click(element);

    expect(setTheme).toHaveBeenCalled();
  });

  test('Deberia renderizar el componente Header con theme Dark', () => {
    const setTheme = jest.fn();

    render(<Header theme='dark' setTheme={setTheme} />);

    const element = screen.getByRole('switch');

    fireEvent.click(element);

    expect(setTheme).toHaveBeenCalled();
  });
});
