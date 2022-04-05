import { configureStore, createSlice } from '@reduxjs/toolkit';

// https://redux-toolkit.js.org/api/createreducer
// state argument를 mutate하거나 new state를 리턴해야 합니다
/* const reducer = createReducer([], {
  // state를 mutate하게 되면 아무것도 리턴하지 않음
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  // 뭔가를 리턴할 때는 꼭 새로운 state
  [deleteToDo]: (state, action) =>
    state.filter(toDo => toDo.id !== action.payload)
}); */

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
  }
});

console.log(toDos.reducer, toDos.actions);

export const { add, remove } = toDos.actions;
// const store = configureStore({ reducer: toDos.reducer });
export default configureStore({ reducer: toDos.reducer });