import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from './redux/counter';
import './style.css';

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>The Count is: {count}</h1>
      <div className='buttons'>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(reset())}>reset</button>
        <button onClick={() => dispatch(increment())}>increment</button>
      </div>
      <div><button onClick={() => dispatch(incrementByAmount(5))}>increment by 5</button></div>
    </div>
  );
};

export default App;
