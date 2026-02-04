import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from "../redux/slices/CounterSlice";

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (  
    <div>
      <h1>Counter: {count}</h1>
      <button style={{width:"30px", height:"30px", border:"none", marginLeft:"15px"}} onClick={()=>dispatch(increment())}> + </button>
      <button style={{width:"30px", height:"30px", border:"none", marginLeft:"15px"}} onClick={()=>dispatch(decrement())}> - </button>
      <button style={{width:"30px", height:"30px", border:"none", marginLeft:"15px"}} onClick={()=>dispatch(incrementByAmount(5))}> +5 </button>
    </div>
  )
}
export default Counter;