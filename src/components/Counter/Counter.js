import {
  useCallback, useMemo, useRef, useState,
} from 'react';

const Counter = () => {
  const number = useRef(0);
  const inputRef = useRef();
  const buttonRef = useRef();
  const [counter, setCounter] = useState(0);

  const multiplicar = () => {
    return counter * 2;
  };

  const callback = useCallback(multiplicar, [counter]);

  // console.log(callback());

  const memo = useMemo(multiplicar, [counter]);

  // console.log(memo);

  const handleClick = () => {
    number.current += 1;
  };

  const handleClickResta = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
      <button onClick={handleClickResta }>
        Restar
      </button>
    </>
  );
};

export default Counter;
