import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const increaseHandlerBy5 = () => {
    dispatch({ type: "increase", amount: 5 });
  };

  const decrementHandlerBy5 = () => {
    dispatch({ type: "decrease", amount: 5 });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandlerBy5}>Increase by 5</button>
      </div>
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={decrementHandlerBy5}>Decrease by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter Visible</button>
    </main>
  );
};

export default Counter;
