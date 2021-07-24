//사용자 관련

// Actions
const EXAMPLE   = 'users/EXAMPLE';

// Reducer
const { produce } = require('immer');

const initialState = {};

const userReducer = (prevState = initialState, action) => {
    return produce(prevState, (draft) => {
        switch (action.type) {
            case 'EXAMPLE':
                break;
            default:
                return prevState;
        }
    });
};

export default userReducer;

// Action 생성자
export const userExample = (data) => {
    return {
        type: 'EXAMPLE',
        data,
    }
};
