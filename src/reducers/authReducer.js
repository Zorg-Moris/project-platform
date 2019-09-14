import * as types from '../actions/actionTypes';

const intialState = {
    user: {},
    userAuth: false
}


const handleAuth = (state, {user}) => ({
    ...state,
    user,
    userAuth: true
})

const handleSetLikesUser = (state, {user, project_id}) => {
  
    let updateUser = {
        ...user,
         likes:[...user.likes, project_id]
        };

    return Object.assign({}, state, {
           user: updateUser
    })
}

const handleLogOut = (state)=> {
    return Object.assign({},state,{
        user: {},
        userAuth: false
    })
}

const handlers = {
    [types.SET_AUTH]: handleAuth,
    [types.SET_LIKES_USER]: handleSetLikesUser,
    [types.LOG_OUT]: handleLogOut
}

export default (state = intialState, action) => {
    const handler = handlers[action.type];
    return handler ? handler(state, action) : state
};