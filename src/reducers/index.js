import todosReducer from './todos';
import {combineReducers} from 'redux';

const allReducers = combineReducers( {
    todos : todosReducer
 })
export default allReducers