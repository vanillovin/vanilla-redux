import { createStore } from 'redux';

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// never! mutate state
// store를 수정할 수 있는 유일한 방법은 action을 보내는 것!
// **mutate 하는 게 아니라 새로운 state를 리턴**
const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      // X state.push(action.text) X
      return [...state, { id: Date.now(), text: action.text }];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};
 
const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: toDo });
};

form.addEventListener("submit", onSubmit);