import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);

  // let counter = 5;

  const addValue = () => {
    if (counter <= 20) {
      setCounter(counter++);
    }
  };

  const removeValue = () => {
    if (counter >= 0) setCounter(counter--);
  };

  return (
    <>
      <h1>React Hooks</h1>
      <h3>Counter Value: {counter}</h3>
      <button onClick={addValue}>Add Counter</button>
      <button onClick={removeValue}>Remove Counter</button>
    </>
  );
}

export default App;
