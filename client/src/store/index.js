import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './modules';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const enhancer = process.env.NODE_ENV === 'production' 
    ? compose(     // 배포할 때
        applyMiddleware(
            thunk,
        ),
    )
    : composeWithDevTools(   //개발환경일 때
        applyMiddleware(
            thunk,
        ),
    );

const store = createStore(reducer, enhancer);

export default store;

