import * as types from '../actions/actionTypes';

export function getProjects(projects) {
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

export function setLike(id, infoLike) {
    return {
        type: types.SET_LIKES,
        id,
        infoLike
    }
}

export function sortLikesAction(likeToggle) {
    return {
        type: types.SORT_LIKES,
        likeToggle
    }
}

export function sortDateAction(dateToggle)  {
    return {
        type: types.SORT_DATE,
        dateToggle
    }
}