import {createStore} from 'redux';
import albumReducer from './reducers/albumReducer';

const store = createStore(albumReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store