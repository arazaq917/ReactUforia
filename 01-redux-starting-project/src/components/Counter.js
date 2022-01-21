import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const toggler = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toogleCounter());
  };
  const inc = () => {
    dispatch(counterActions.increment());
  };
  const dec = () => {
    dispatch(counterActions.decrement());
  };
  const increment = () => {
    dispatch(counterActions.increase(5));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggler && <div className={classes.value}>{counter}</div>}
      <button onClick={inc}>Increment</button>
      <button onClick={increment}>Increase by 5</button>
      <button onClick={dec}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
