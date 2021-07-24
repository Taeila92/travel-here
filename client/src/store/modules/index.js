const {combineReducers} = require('redux');
const userReducer = require('./user');
const boardReducer = require('./board');

const rootReducer = combineReducers({
    user: userReducer,
    post: boardReducer,
});

export default rootReducer;