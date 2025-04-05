import React from "react";
import Counter from "./Counter";

const CounterDemo = () => {
  return (
    <Counter
      value={1}
      places={[100, 10, 1]}
      fontSize={80}
      padding={5}
      gap={10}
      textColor="white"
      fontWeight={900}
    />
  );
};

export default CounterDemo;
