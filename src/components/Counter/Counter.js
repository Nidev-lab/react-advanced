/* eslint-disable no-return-assign */
import React, {
  useMemo, useCallback, useState, useRef,
} from 'react';

const Counter = () => {
  const number = useRef(0);
  const inputRef = useRef();
  const buttonRef = useRef();
  const [counter, setCounter] = useState(0);

  const multiplicar = () => {
    return counter * 2;
  };

  const callback = useCallback(multiplicar, [counter]); // retorna una fn
  // console.log(callback());
  const memo = useMemo(multiplicar, [counter]); // retorna un valor
  // console.log(memo);
  console.log(number);

  // const handleClick = useCallback(() => {
  //   setCounter(counter + 1);
  // }, [counter]);

  // const handleClickMemo = useMemo(() => {
  //   setCounter(counter + 1);
  // }, [counter]);
  // console.log(counter);

  const handleClick = () => {
    number.current += 1;
    console.log(number.current);
    console.log(inputRef.current.value);
    console.log(buttonRef.current.innerText); // accede al txt del boton
  };

  console.log(inputRef.current);

  return (
    <>
    <input type="text" ref={inputRef} />
    <div>{number.current}</div>
    {/* <button onClick={() => setCounter(counter + 1)}>Incementar</button> */}
    <button onClick={handleClick} ref={buttonRef}>Incrementar</button>
    </>
  );
};

export default Counter;
