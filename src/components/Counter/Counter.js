import {
  useId,
  useReducer,
} from 'react';
import reducer from '../../utils/opertationReducer';

const initialState = 0;

const init = () => {
  return initialState;
};

const Counter = () => {
  const id = useId();
  const [state, dispatch] = useReducer(reducer, initialState, init);

  return (
    <>
      <p>{id}</p>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: 'incrementar' })}>Sumar</button>
      <button onClick={() => dispatch({ type: 'decrementar' })}>Restar</button>
      <button onClick={() => dispatch({ type: 'reset', payload: initialState })}>Reset</button>
    </>
  );
};

export default Counter;
