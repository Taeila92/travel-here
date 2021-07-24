// 게시판 관련

// Actions
const EXAMPLE = 'board/EXAMPLE';

// Reducer
const { produce } = require('immer');

const initialState = {};

const boardReducer = (prevState = initialState, action) => {
    return produce(prevState, (draft) => {
        switch (action.type) {
            case 'EXAMPLE':
                break;
            default:
                return prevState;
        }
    });
};

export default boardReducer;

// Action 생성자
export const boardExample = (data) => {
    return {
        type: 'EXAMPLE',
        data,
    }
};
