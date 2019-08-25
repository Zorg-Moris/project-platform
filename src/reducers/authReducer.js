import * as types from '../actions/actionTypes';

const intialState = {
    user: {},
    userAuth: false
}



// const authReducer = function (state = intialState, action) {

//     switch (action.type) {
//         case types.SET_AUTH:

//             return {
//                 ...state, user: action.user
//             };


//         default:
//             return state;
//     }
//}


const handleAuth = (state, { user }) => ({
    ...state, 
    user,
    userAuth: true
})

const handlers = {
    [types.SET_AUTH]: handleAuth,
}

export default (state = intialState, action) => {
    const handler = handlers[action.type];
    return handler ? handler(state, action) : state
};