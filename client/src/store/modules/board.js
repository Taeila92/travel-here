const { produce } = require('immer');
// 게시판 관련

// Actions
const EXAMPLE = 'board/EXAMPLE';

// Action 생성자
export const boardExample = (data) => {
    return {
        type: 'EXAMPLE',
        data,
    }
};

// Reducer
const initialState = {};

const reducer = (prevState = initialState, action) => {
    return produce(prevState, (draft) => {
        switch (action.type) {
            case 'EXAMPLE':
                break;
            default:
                return prevState;
        }
    });
};

export default reducer;


