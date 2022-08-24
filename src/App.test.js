import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />); // renderiza el componente
  const navElement = screen.getByText('Navbar'); // buscamos que haya renderizado nuestro componente
  expect(navElement).toBeInTheDocument(); // si tuvo o no que ser renderizado el mismo
});
