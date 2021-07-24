const { createStore, compose, applyMiddleware } = require('redux');
const {composeWithDevTools} = require('redux-devtools-extension');
const reducer = require('./reducers');


// store
const initialState = {
    //예시
    // user: {
    //     isLoggedIn: false,
    //     data: null,
    // },
    // posts: [],
    // comments: [],
    // likes: [],
};



// 미들웨어
const thunkMiddleware = (store) => (next) => (action) => {
    if(typeof action == 'function'){
        return action(store.dispatch, store.getState);  
    }
    return next(action); 
}



const enhancer = process.env.NODE_ENV === 'production' 
    ? compose(     // 배포할 때
        applyMiddleware(
            thunkMiddleware,
        ),
    )
    : composeWithDevTools(   //개발환경일 때
        applyMiddleware(
            thunkMiddleware,
        ),
    );

export const store = createStore(reducer, initialState, enhancer);

