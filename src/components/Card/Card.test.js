import { render, screen, fireEvent } from '@testing-library/react';
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

  test('Esperamos que ante un click en el boton, el componente reaccione.', () => {
    const getIdPersonaje = jest.fn();
    render(<Card {...character} getIdPersonaje={getIdPersonaje} />);

    const element = screen.getByText('Go somewhere');
    fireEvent.click(element);

    expect(getIdPersonaje).toHaveBeenCalled();
  });

  test('Esperamos que el componente este en theme dark', () => {
    render(<Card {...character} theme="dark" />);

    const element = screen.getByText('Go somewhere');

    expect(element).toHaveClass('btn-success');
  });
});
