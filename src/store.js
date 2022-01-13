import { createStore } from 'redux';

import reducer from './reducers/habits';

let store;

export function configureStore() {
  store = createStore(reducer);
  return store;
}
