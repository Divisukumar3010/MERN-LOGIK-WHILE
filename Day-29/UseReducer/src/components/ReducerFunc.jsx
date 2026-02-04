import React, { useReducer } from 'react'
function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
}
const ReducerFunc = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h1>{state.count}</h1>
      <button style={{ marginRight: '10px', width: '80px', fontSize: '20px',fontWeight:'500' }} onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button style={{ marginRight: '10px', width: '80px', fontSize: '20px',fontWeight:'500' }} onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}

export default ReducerFunc