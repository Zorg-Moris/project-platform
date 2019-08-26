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


const handleAuth = (state, {user}) => ({
    ...state,
    user,
    userAuth: true
})

const handleSetLikesUser = (state, {user, project_id}) => {
  
    let newLikes = [...user.likes, project_id];
    let updateUser = {
        ...user,
         likes: newLikes
        };

    return Object.assign({}, state, {
           user: updateUser
    })
}

const handlers = {
    [types.SET_AUTH]: handleAuth,
    [types.SET_LIKES_USER]: handleSetLikesUser
}

export default (state = intialState, action) => {
    const handler = handlers[action.type];
    return handler ? handler(state, action) : state
};