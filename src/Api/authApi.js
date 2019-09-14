import store from '../store';
import {
    setAuthAction, setLikesUserAuth,setLogOutAuth
} from '../actions/authActions';


export function setAuth(user) {
    store.dispatch(setAuthAction(user));
}


export function getAuth() {
    let storage = store.getState();
    return storage.authenticationState.user;
}

export function setLikesAuthUser(user, project_id) {
    store.dispatch(setLikesUserAuth(user,project_id));
}

export function setLogOut() {
    store.dispatch(setLogOutAuth());
}