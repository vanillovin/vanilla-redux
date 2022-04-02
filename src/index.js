import { createStore } from 'redux';
// never! mutate state
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};
 
const store = createStore(reducer);

// HTML을 수정해 주는 것뿐 우리 app은 dataless
const createToDo = toDo => {
  const li = document.querySelector('li');
  li.innerText = toDo;
  ul.appendChild(li);
}

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  createToDo(toDo);
  store.dispatch({ type: ADD_TODO, text: toDo });
};

form.addEventListener("submit", onSubmit);