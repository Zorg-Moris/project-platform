import * as types from '../actions/actionTypes';

export function setAuthAction(user) {
    return {
        type: types.SET_AUTH,
        user
    };
}


export function setLikesUserAuth(user,project_id) {
    return {
        type: types.SET_LIKES_USER,
        user,
        project_id
    }
}
