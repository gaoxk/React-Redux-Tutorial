export default const reducer = (state, action) => {
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
