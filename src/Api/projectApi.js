import Axios from 'axios';
import store from '../store';
import {
    getProjects,
    createProjectAction,
    editProject,
    deleteProject,
    setLike,
    sortLikesAction,
    sortDateAction
} from '../actions/projectActions';




export function getAllProjects() {
    Axios.get('http://localhost:4000/projects').then(response => {
            store.dispatch(getProjects(response.data));
            // return response;
        })
        .catch(function (error) {
            console.log(error);
        });
}


export async function createProject(project) {

    let dateProject = await dateCreateProject();

    const projectInfo = {
        user_id: project.user_id,
        user_name: project.user_name,
        project_name: project.project_name,
        description: project.description,
        date: dateProject,
        like: 0,
        dizlike: 0,
    };


    Axios.post('http://localhost:4000/projects', projectInfo)
        .then(response => {
            Axios.get('http://localhost:4000/projects').then(res => {
                store.dispatch(createProjectAction(res.data));
            }).catch(function (error) {
                console.log(error);
            });
        }).catch(function (error) {
            console.log(error);
        });
}


function dateCreateProject() {
    let dateCreateProject = new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }).split(' ').join('/');

    return dateCreateProject;
}


//edit

export async function getProjectDataDb(id) {

    let project = await Axios.get('http://localhost:4000/projects/' + id)
        .then(response => {
            return response.data;
        }).catch(function (error) {
            console.log(error);
        })
    return project;
}


export async function updateInfoProject(project, id) {

    let info = await Axios.put('http://localhost:4000/projects/' + id, project)
        .then(res => {
            store.dispatch(editProject(id, project));
            return true;
        }).catch(function (err) {
            console.log(err);
            return false;
        });
    return info;
}

//delete

export function deleteProgectDb(id) {

    Axios.delete('http://localhost:4000/projects/' + id)
        .then(console.log("Deleted"),
            store.dispatch(deleteProject(id)))
        .catch(error => console.log(error));
}


export function setInfoLike(id, infoLike) {
    if (infoLike === "like") {

        Axios.put('http://localhost:4000/projects/' + id + '/likes')
            .then(store.dispatch(setLike(id, infoLike)))
            .catch(error => console.log(error));

    } else if (infoLike === "dizlike") {
        Axios.put('http://localhost:4000/projects/' + id + '/dizlikes')
            .then(console.log("UpDate DizLike"),
                store.dispatch(setLike(id, infoLike)))
            .catch(error => console.log(error));
    }
}


export function sortLikesApi(toggle) {
    store.dispatch(sortLikesAction(toggle));
}


export function sortDateApi(toggle) {
    store.dispatch(sortDateAction(toggle));
}