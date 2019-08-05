import * as types from '../actions/actionTypes';

const initialState = {
    users: []
}

const userReducer = function (state = initialState, action) {
    
    switch (action.type) {
        case types.CREATE_USER:

            return Object.assign({}, state, {
                users: action.users
            });

        case types.ADD_PROJECT_ID:
            return Object.assign({}, state, {
                users: state.users.map(item => item._id === action.user_id ? {
                    ...item,
                    likes:[...item.likes,action.project_id]
                } : item)
            });
        default:
            return state
    }
}


export default userReducer;