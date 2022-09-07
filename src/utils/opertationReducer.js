const reducer = (state, action) => {
  if (action.type === 'decrementar' && state === 0) {
    return 0;
  }

  switch (action.type) {
    case 'incrementar':
      return state + 1;

    case 'decrementar':
      return state - 1;

    case 'reset':
      return action.payload;

    default:
      break;
  }
};

export default reducer;
