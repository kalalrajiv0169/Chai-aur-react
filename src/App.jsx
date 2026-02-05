import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(20);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="container">
      <h1>Chai aur react</h1>
      <h3>Counter value: {counter}</h3>

      <button onClick={addValue}>Add value</button>
      <br /><br />
      <button onClick={removeValue}>Remove value</button>

      <p>footer: {counter}</p>
    </div>
  );
}

export default App;