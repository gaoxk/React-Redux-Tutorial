import { createStore } from 'redux';

//reducer
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

export const getName = state => state ? state.name : null;

//actions
export const changeName = name => ({
  type: 'CHANGE_NAME',
  name: name
});

export const jadName = {
  type: 'JAD_NAME',
  name: 'Jad'
};

//store
export const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

// How to dispatch
// store.dispatch({type:"CHANGE_NAME", name:"korst"});
