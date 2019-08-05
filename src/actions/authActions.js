import * as types from '../actions/actionTypes';

export function setAuthAction(user) {
    return {
        type: types.SET_AUTH,
        user
    };
}
