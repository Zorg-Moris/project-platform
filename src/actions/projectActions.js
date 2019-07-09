import * as types from '../actions/actionTypes';

export function getProjects(projects) {
    console.log("project Action - ", projects);
    return {
        type: types.GET_PROJECTS,
        projects: projects
    };
}


export function createProjectAction(projects) {
    return {
        type: types.CREATE_PROJECT,
        projects: projects
    };
}

export function editProject(id, project) {
    return {
        type: types.EDIT_PROJECT,
        id,
        project
    };
}

export function deleteProject(id) {
    return {
        type: types.DELETE_PROJECT,
        id
    }
}

export function setLike(id,project) {
    return {
        type: types.SET_LIKE,
        id,
        project
    }
}

export function setDizLike(id,project) {
    return {
        type: types.SET_DIZLIKE,
        id,
        project
    }
}