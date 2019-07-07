import * as types from '../actions/actionTypes';

const initialState = {
    projects: []
}


const projectReducer = function (state = initialState, action) {
    console.log("action.types - ", action.type);

    switch (action.type) {
        case types.GET_PROJECTS:
            console.log("project reduser Object - ", Object.assign({}, state, { projects: action.projects }));
            return { ...state, projects: action.projects };

        case types.CREATE_PROJECT:
            console.log("project reduser Object - ", Object.assign({}, state, { projects: [...state.projects, action.project] }));
            return Object.assign({}, state, { projects: action.projects });

        case types.EDIT_PROJECT:
            let project = Object.assign({}, { _id: action.id }, action.project);
            let index = state.projects.findIndex(item => item._id === action.id);
            state.projects.splice(index, 1, project);
            return Object.assign({}, state, { projects: state.projects });

        case types.DELETE_PROJECT:
            return Object.assign({}, state, { projects: [...state.projects.filter(item => item._id !== action.id)] });


        default:
            return state
    }
}

export default projectReducer;