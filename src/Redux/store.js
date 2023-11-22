import { createStore } from 'redux';
import rootReducer from './reducer';

const store = createStore(rootReducer); // add middleware and enhancers if needed

export default store;
