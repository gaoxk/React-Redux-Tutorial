import { createStore } from 'redux';
import { reducer } from './reducer.js';

export const store = createStore(reducer , {name: 'Gregg'});

store.subscribe(() => {
  console.log(store.getState());
});
