const initialState = {
  items: null,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "get":
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};
export default data;
