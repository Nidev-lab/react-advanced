import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../providers/ThemeProvider';
const { default: Header } = require('./Header');

describe('Header test', () => {
  test('esperamos que se renderice el header', () => {
    render(<Header />);
    const element = screen.getByText('Navbar');
    expect(element).toBeInTheDocument();
  });
  test('Esperamos que se renderice con light el header', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>,
    );
    const element = screen.queryByTestId('navTestId');
    expect(element).toHaveClass('bg-light');
  });
  test('Esperamos que se cambie el tema del header', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>,
    );
    const switchElement = screen.queryByRole('switch');
    fireEvent.click(switchElement);
    const element = screen.queryByTestId('navTestId');
    expect(element).toHaveClass('bg-dark');
  });
  test('Esperamos que se cambie el tema del header', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>,
    );
    const switchElement = screen.queryByRole('switch');
    fireEvent.click(switchElement);
    fireEvent.click(switchElement);
    const element = screen.queryByTestId('navTestId');
    expect(element).toHaveClass('bg-light');
  });
  test('Debe cambiar el tema a modo oscuro', () => {
    render(<ThemeProvider>
      <Header />
    </ThemeProvider>,
    );

    const buttonElement = screen.getByText('Dark');
    fireEvent.click(buttonElement);

    const element = screen.queryByTestId('navTestId');
    expect(element).toHaveClass('bg-dark');
  });
});
