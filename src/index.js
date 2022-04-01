import { createStore } from "redux";

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

// data를 modify하는 함수! 여기가 유일하게 data를 바꿀 수 있는 곳
const countModifier = (state = 0) => {
  // .... modify state

  // return 값이 우리의 application에 있는 data가 됨
  return state;
};

// store는 data(state)를 저장하는 장소. state는 너의 app에서 바뀌는 data
// store를 만들면 우리는 countModifier를 initial state로 불러옴
const countStore = createStore(countModifier);

console.log(countStore);
// {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ}

console.log(countStore.getState());
// 0