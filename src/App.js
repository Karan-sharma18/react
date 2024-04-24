import React, { useState } from 'react';
import './App.css';

// Child component that receives state as props
function ChildComponent(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Counter: {props.counter}</p>
      <button onClick={props.onIncrement}>Increment</button>
    </div>
  );
}

// Parent component that manages state
function App() {
  // State management in parent component
  const [counter, setCounter] = useState(0);

  // Handler function to increment counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Pass state and handler function as props to child component */}
      <ChildComponent counter={counter} onIncrement={incrementCounter} />
    </div>
  );
}

export default App;
