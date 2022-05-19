import React, { useMemo, useState } from "react";

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <>
      <div>
        <button onClick={incrementOne}>CountOne - {counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>

      <div>
        <button onClick={incrementTwo}>CountTwo - {counterTwo}</button>
      </div>
    </>
  );
};

export default Counter;
