import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');
number.innerText = 0;

const countModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === 'ADD') {
    return count + 1;
  } else if (action.type === 'MINUS') {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  console.log('onChange', countStore.getState());
  number.innerText = countStore.getState();
};

// store 안에 있는 변화 감지
// subscribe는 우리에게 store 안에 있는 변화들을 알 수 있게 해줌
countStore.subscribe(onChange); // store 안의 변화를 감지하면 onChange 실행

const handleAdd = () => countStore.dispatch({ type: "ADD" });

const handleMinus = () => countStore.dispatch({ type: "MINUS" });

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);