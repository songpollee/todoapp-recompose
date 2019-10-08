import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todo from './todoReducer';

export default combineReducers({
  todo,
  form: formReducer,
});
