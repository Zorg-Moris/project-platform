import store from '../store';
import {
    setAuthAction,
} from '../actions/authActions';


export function setAuthApi(user) {
    store.dispatch(setAuthAction(user));
}


export function getAuthApi() {
    let storage = store.getState();
    return storage.authenticationState.user;
}