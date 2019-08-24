import Axios from 'axios';
import store from '../store';
import {
    createUserAction,
    addLikeProject
} from '../actions/userActions';


export function createUserApi(user) {

    Axios.post('http://localhost:4000/users', user)
        .then(response => {
            getAllUsers();
        }).catch(function (error) {
            console.log(error);
        });
}

export function getAllUsers() {
        Axios.get('http://localhost:4000/users').then(response => {
        store.dispatch(createUserAction(response.data));
        return response;
    }).catch(function (error) {
        console.log(error);
    });
}


export async function checkUserDb(user) {

    let info = await Axios.post('http://localhost:4000/users/auth', user)
        .then(response => {
            return response.data;
        }).catch(function (error) {
            return false;
        });

    return info;
}

export function addUserLikeProject(project_id, user_id) {
    store.dispatch(addLikeProject(user_id, project_id));
    let info = {
        user_id,
        project_id
    }

    Axios.put('http://localhost:4000/users/likes', info)
        .then(res => {
            console.log(res);
        }).catch(function (error) {
            console.log(error);
        });
}