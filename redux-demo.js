const redux = require("redux");

// reducer function
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

// store
const store = redux.createStore(counterReducer);

console.log(store.getState()); //outputs initial state

// subscriber function
const counterSubscriber = () => {
  //reaching the store
  const latestState = store.getState();
  console.log(latestState);
};

// linking subscribe function to redux
// subscribe method expects a function that will be executed whenever counterSubscriber changes
store.subscribe(counterSubscriber);

// dispatches action(javascript object)
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
