import {combineReducers} from 'redux';
import user from './user';
import board from './board';
import comment from './comment';

const rootReducer = combineReducers({
    user,
    board,
    comment,
});

export default rootReducer;