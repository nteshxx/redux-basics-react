import React from 'react';
import './style.css';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <h1>The Count is: {count}</h1>
      <div className='buttons'>
        <button onClick={() => setCount(count - 1)}>decrement</button>
        <button onClick={() => setCount(count + 1)}>increment</button>
      </div>
    </div>
  );
};

export default App;
