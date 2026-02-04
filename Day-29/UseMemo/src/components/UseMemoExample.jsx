import React, { useState, useMemo } from 'react';

function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  const expensiveValue = useMemo(() => {
    console.log('Calculating...');
    return count * 2;
  }, [count]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <h2>Count: {count}</h2>
      <h2>Other: {other}</h2>
      <h2>Expensive Value (count * 2): {expensiveValue}</h2>
      <button style={{marginRight:'10px'}} onClick={() => setCount(count + 1)}>Increment Count</button>
      <button style={{marginRight:'10px'}} onClick={() => setOther(other + 1)}>Change Other State</button>
    </div>
  );
}
export default UseMemoExample;
