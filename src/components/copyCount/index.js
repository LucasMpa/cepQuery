import React from "react";

import { useCount, useName} from "../../context/Count";

export default function OriginalCount() {
  const { count, setCount } = useCount();
  const {name} = useName();

  return (
    <div>
      <h3>{name} </h3>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}
