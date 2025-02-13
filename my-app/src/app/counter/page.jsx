import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const increament = () => {
    setCount(count + 2);
  };
  const decreament = () => {
    setCount(count - 2);
  };
  return (
    <div>
      <h1 onClick={increament}  className="text-2xl font-bold text-sky-700">minius</h1>
      <h1 className="text-2xl font-bold text-red-800"> {count}</h1>
      <h1 onClick={decreament} className="text-2xl font-bold text-sky-700">plus</h1>
    </div>
  );
};

export default Counter;
