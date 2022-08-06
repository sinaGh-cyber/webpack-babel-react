import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <section>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Add
      </button>
    </section>
  );
};
export default Counter;
