import * as types from '../actions/actionTypes';

const intialState = {
    user: false
}


const authReducer = function (state = intialState, action) {
   
    switch (action.type) {
        case types.SET_AUTH:

            return {
                ...state, user: action.user
            };


        default:
            return state;
    }
}

export default authReducer;