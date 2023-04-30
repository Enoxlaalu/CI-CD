import './App.css';
import {useState} from "react";

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </header>
    </div>
  );
}

export default App;
