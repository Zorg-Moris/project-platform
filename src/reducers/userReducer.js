import * as types from '../actions/actionTypes';

const initialState = {
    users: []
}


const handleCreateUser = (state, {users}) => ({
    ...state,
    users: users
})

const handleAddProjectId = (state,{user_id,project_id})=>{   
    return Object.assign({}, state, {
        users: state.users.map(item => item._id === user_id ? {
            ...item,
            likes: [...item.likes, project_id]
        } : item)
    });
}

const handlers = {
    [types.GET_USERS]:handleCreateUser,
    [types.ADD_PROJECT_ID]: handleAddProjectId
}

export default (state = initialState, action) => {
    const handler = handlers[action.type];
    return handler ? handler(state, action) : state
};
// const userReducer = function (state = initialState, action) {

//     switch (action.type) {
//         case types.CREATE_USER:

//             return Object.assign({}, state, {
//                 users: action.users
//             });

//         case types.ADD_PROJECT_ID:
//             return Object.assign({}, state, {
//                 users: state.users.map(item => item._id === action.user_id ? {
//                     ...item,
//                     likes: [...item.likes, action.project_id]
//                 } : item)
//             });
//         default:
//             return state
//     }
// }


// export default userReducer;