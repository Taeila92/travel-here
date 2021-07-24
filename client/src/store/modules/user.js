const { produce } = require('immer');
//사용자 관련

// Actions
const EXAMPLE   = 'users/EXAMPLE';

// Action 생성자
export const userExample = (data) => {
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


