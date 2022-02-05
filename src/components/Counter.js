import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";

const Counter = () => {
  const selectCounter = (state) => state.counter.counter;
  const selectShowCounter = (state) => state.counter.showCounter;

  const counter = useSelector(selectCounter);
  const showCounter = useSelector(selectShowCounter);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(counterActions.increment(undefined));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement(undefined));
  };

  const increaseHandlerBy5 = () => {
    dispatch(counterActions.increase(5));
  };

  const decrementHandlerBy5 = () => {
    dispatch(counterActions.decrease(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter(undefined));
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
