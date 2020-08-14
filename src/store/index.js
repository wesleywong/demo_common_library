import { createStore } from 'redux';
import master from './master'; //reducer

const store = createStore(
	master
);
export default store;
