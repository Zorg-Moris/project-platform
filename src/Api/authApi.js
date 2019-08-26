import store from '../store';
import {
    setAuthAction, setLikesUserAuth
} from '../actions/authActions';


export function setAuthApi(user) {
    store.dispatch(setAuthAction(user));
}


export function getAuthApi() {
    let storage = store.getState();
    return storage.authenticationState.user;
}

export function setLikesAuthUser(user, project_id) {
    store.dispatch(setLikesUserAuth(user,project_id));
}