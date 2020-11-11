import React, { useState } from "react";

import { useCount, useName } from "../../context/Count";

export default function OriginalCount() {
  const { count, setCount } = useCount();
  const { name, setName } = useName();

  return (
    <div>
      <h2> {name}</h2>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
      <div style={{ paddingTop: 30}}>
        <label onChange={(e) => setName(e.target.value) }>
          Teste:
          <input />
        </label>
      </div>
    </div>
  );
}
