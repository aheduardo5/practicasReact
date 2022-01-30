import React, { useState } from "react";

export const CounterApp = () => {
  const [count, setCount] = useState(0); // Counter
  const [incrementStateBtn, SetIncrementStateBtn] = useState(false); // button increment disabled
  const [resetStateBtn, setResetBtn] = useState(true); // button reset < 0 enabled
  const [decrementStateBtn, setDecrementStateBtn] = useState(true); // button reset < 0 enabled

  const incrementState = () => {
    setCount(count + 1);
    count > 0 && count + 1 >= 10
      ? SetIncrementStateBtn(true)
      : setResetBtn(false);
  };

  const resetState = () => {
    setCount(0);
    console.log(count);
    if (count >= 10 || count != 0) {
      setResetBtn(true);
      SetIncrementStateBtn(false);
    }
  };

  const decrementState = () => {
    setCount(count - 1);
    !incrementStateBtn && !resetStateBtn ? setDecrementStateBtn(false) : setDecrementStateBtn(true);
  };

  console.log(incrementStateBtn, resetStateBtn, decrementStateBtn)
  
  return (
    <div className="counterApp-container">
      <h2>Counter App </h2>

      <p> {count} </p>
      <button disabled={incrementStateBtn} onClick={incrementState}>
        Increment
      </button>
      <button disabled={resetStateBtn} onClick={resetState}>
        Reset
      </button>
      <button disabled={decrementStateBtn} onClick={decrementState}>
        Decrement
      </button>
    </div>
  );
};

export default CounterApp;
