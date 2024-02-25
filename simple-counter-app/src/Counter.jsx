import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const Decrease = () => {
    setCount((c) => c - 1);
  };
  const Reset = () => {
    setCount((c) => 0);
  };
  const Increase = () => {
    setCount((c) => c + 1);
  };

  return (
    <div className="container">
      <h1 className="title">COUNTER APP</h1>
      <p>{count}</p>
      <button onClick={Decrease}>-</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Increase}>+</button>
    </div>
  );
}

export default Counter;