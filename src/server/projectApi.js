import Axios from 'axios';
import store from '../store/store';
import {
    getProjects,
    createProjectAction,
    editProject,
    deleteProject
} from '../actions/projectActions';




export function getAllProjects() {
    Axios.get('http://localhost:4000/project').then(response => {
            store.dispatch(getProjects(response.data));
            console.log("getAllProjects response.data Api store - ", response.data);
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
}


export function createProject(project) {
    console.log("project ApiStore - ", project);
    let dateCreateProject = dateCtereteProject();
    const projectInfo = {
        person_name: project.person_name,
        project_name: project.project_name,
        description: project.description,
        date: dateCreateProject
    };

    Axios.post('http://localhost:4000/project/add', projectInfo)
        .then(response => {
            console.log("createProject response.data Api store - ", response.data);
            Axios.get('http://localhost:4000/project').then(response => {
                    store.dispatch(createProjectAction(response.data));
                    console.log("createProjectAction response.data Api store - ", response.data);
                    let storage = store.getState();
                    console.log("storage - ", storage);
                    return response;
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
        .catch(function (error) {
            console.log(error);
        });
}

function dateCtereteProject() {
    let dateCreateProject = new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }).split(' ').join('-');

    return dateCreateProject;
}

//edit

export async function getProjectDataDb(id) {

    let project = await Axios.get('http://localhost:4000/project/edit/' + id)
        .then(response => {
            return response.data;
        }).catch(function (error) {
            console.log(error);
        })
    return project;
}


export function updateInfoProject(project, id) {
    console.log("updateInfoProject ApiStore - ", project);
    const projectInfo = {
        person_name: project.person_name,
        project_name: project.project_name,
        description: project.description
    };

    Axios.post('http://localhost:4000/project/update/' + id, projectInfo)
        .then(res => console.log("res.data", res.data),
            store.dispatch(editProject(id, projectInfo)));
}

//delete

export function deleteProgectDb(id) {

    Axios.get('http://localhost:4000/project/delete/' + id)
        .then(console.log("Deleted"),
            store.dispatch(deleteProject(id)))
        .catch(error => console.log(error));
}