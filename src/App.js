import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import TodoPage from './pages/TodoPage';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const App = () => {
  return (
    <Provider store={store}>
      <TodoPage />
    </Provider>
  );
}

export default App;
