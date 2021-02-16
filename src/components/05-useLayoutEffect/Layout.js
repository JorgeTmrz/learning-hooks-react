import React, { useLayoutEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";
import "./layout.css";
export const Layout = () => {
  const paragraphRef = useRef();
    const [boxSize, setBoxSize] = useState({})
  const [counter, increment] = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];

  useLayoutEffect(() => {
    setBoxSize(paragraphRef.current.getBoundingClientRect());
  }, [quote]);
  return (
    <>
      <h1>Layout Effect</h1>
      <hr />
      <blockquote className="blockquote text-right">
        <p ref={paragraphRef} className="mb-0">
          {quote}
        </p>
      </blockquote>

      <pre>
        {JSON.stringify(boxSize, 4, 4)}
      </pre>

      <button onClick={increment} className="btn btn-dark">
        Next Quote
      </button>
    </>
  );
};
