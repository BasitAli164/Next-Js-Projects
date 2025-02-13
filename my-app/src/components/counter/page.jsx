import React, { useState } from "react";
const  Counter = () => {
  const [count, setCount] = useState(0);
  const increament = () => {
    setCount(count + 1);
  };
  const decreament = () => {
    setCount(count - 1);
  };
  return (
    <div className="flex gap-10 items-center justify-center">
      <h1 onClick={decreament}  className="text-2xl font-bold text-sky-700 bg-red-300 rounded-full px-10 py-2  cursor-default">minius</h1>
      <h1 className="text-2xl font-bold text-red-800"> {count}</h1>
      <h1 onClick={increament} className="text-2xl font-bold text-sky-700 px-10 py-2 bg-red-300 rounded-full cursor-default">plus</h1>
    </div>
  );
};

export default Counter;
