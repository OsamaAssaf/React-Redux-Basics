import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  function incrementHandler() {
    dispatch(counterActions.increment());
    // dispatch({ type: "increment" });
  }

  function increaseHandler(amount) {
    dispatch(counterActions.increase(amount)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
    // dispatch({ type: "increase", amount });
  }

  function decrementHandler() {
    dispatch(counterActions.decrement());
    // dispatch({ type: "decrement" });
  }
  function toggleCounterHandler() {
    dispatch(counterActions.toggleCounter());
    // dispatch({ type: "toggle" });
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={() => increaseHandler(5)}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandle() {
//     this.props.increment();
//   }
//   decrementHandle() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandle.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandle.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     counter: state.counter,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
