import React, { createContext, useContext, useState } from "react";

const CountContext = createContext();

export default function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Lucas");

  return (
    <CountContext.Provider
      value={{
        count,
        setCount,
        name,
        setName,
      }}
    >
      {children}
    </CountContext.Provider>
  );
}

export function useCount() {
  const context = useContext(CountContext);
  const { count, setCount } = context;
  return { count, setCount };
}

export function useName() {
  const context = useContext(CountContext);
  const { name, setName } = context;
  return { name, setName };
}
