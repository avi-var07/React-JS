import React, { useEffect, useRef } from "react";

function RenderCount() {
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current += 1;
    console.log("Render count:", countRef.current);
  });

  return <h1>Count: {countRef.current}</h1>;
}

export default RenderCount;
