import { render, screen } from '@testing-library/react';
import Card from './Card';

const character = {
  name: 'Mateo',
  species: 'human',
  image: 'https://picsum.photos/200/300',
  id: '1',
};

const testElementId = 'character-card';

describe('Card test', () => {
  test('Esperamos que renderice el componente card', () => {
    render(<Card {...character} />); // renderizamos el componente

    const element = screen.getByText(character.name); // buscamos lo que rederizamos

    expect(element).toBeInTheDocument();
  });

  test('Esperamos que no renderice el componente card', () => {
    render(<Card />); // renderizamos el componente

    const element = screen.queryByText(testElementId);

    expect(element).not.toBeInTheDocument();
  });

  test('Esperamos que renderice el componente card con su imagen', () => {
    render(<Card {...character} />); // renderizamos el componente

    const element = screen.getByAltText(character.image);

    expect(element).toBeInTheDocument();
  });
});
