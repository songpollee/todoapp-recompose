import { PUSH_ITEM } from '../actions/todoAction';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case PUSH_ITEM:
      const { text } = action.payload;
      return [...state, text];
    default:
      return state;
  }
};

export default todoReducer;
