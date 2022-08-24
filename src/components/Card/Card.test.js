import { render, screen } from '@testing-library/react';
import Card from './Card';

const character = {
  name: 'Mateo',
  species: 'human',
  image: 'http://../',
};

describe('Card test', () => {
  test('Esperamos que renderice el componente card', () => {
    render(<Card character={character} />);
    const element = screen.getByText(character.name);
    expect(element).toBeInTheDocument();
  });
  test('Esperamos que NO renderice el componente card', () => {
    render(<Card />);
    const element = screen.getByTestId(testid);
    expect(element).not.toBeDefined();
  });
});
