import { createStore } from 'redux';

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {...state, name: action.name};
      break;
    case "JAD_NAME":
      return {...state, name: action.name, jad: true};
      break;
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({type:"CHANGE_NAME", name:"korst"});
