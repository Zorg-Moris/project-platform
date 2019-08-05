import * as types from './actionTypes';

export function createUserAction(users) {
    return {
        type: types.CREATE_USER,
        users
    }
}

export function getUsers () {
    return {
        type: types.GET_USERS
    }
}

export function addLikeProject (user_id, project_id) {
    return {
        type: types.ADD_PROJECT_ID,
        user_id,
        project_id
    }
}