import { useState } from "react";

export const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState);

  const increment = (value=1) => {
    setCounter(counter + value);
  };

  const decrement = () => {
    if (counter === 1) {
        return
    }
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialState);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
