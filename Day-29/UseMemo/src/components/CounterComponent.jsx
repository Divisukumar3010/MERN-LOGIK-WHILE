import { useState } from 'react';
import useCounter from './useCounter';

function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter(5);

  return (
    <div>
      <h1>{count}</h1>
      <button style={{ marginRight: '10px', width: '80px'}} onClick={increment}>+</button>
      <button style={{ marginRight: '10px', width: '80px'}} onClick={decrement}>-</button>
      <button style={{ marginRight: '10px', width: '80px'}} onClick={reset}>Reset</button>
    </div>
  );
}
export default CounterComponent;