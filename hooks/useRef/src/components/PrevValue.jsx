import React, { useEffect, useRef, useState } from "react";

function PrevValue() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(null);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <>
      <h1>Current: {count}</h1>
      <h2>Previous: {prevCount.current}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default PrevValue;
