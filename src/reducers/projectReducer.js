import * as types from '../actions/actionTypes';

const initialState = {
    projects: []
}


const projectReducer = function (state = initialState, action) {

    switch (action.type) {
        case types.GET_PROJECTS:
            return {
                ...state, projects: action.projects
            };

        case types.CREATE_PROJECT:
            return Object.assign({}, state, {
                projects: action.projects
            });

        case types.EDIT_PROJECT:
            let project = Object.assign({}, {
                _id: action.id
            }, action.project);
            let index = state.projects.findIndex(item => item._id === action.id);
            state.projects.splice(index, 1, project);
            return Object.assign({}, state, {
                projects: state.projects
            });

        case types.DELETE_PROJECT:
            return Object.assign({}, state, {
                projects: [...state.projects.filter(item => item._id !== action.id)]
            });

        case types.SET_LIKES:
            let indexProjectLike = state.projects.findIndex(item => item._id === action.id);

            if (action.infoLike === "like") {
                let countLike = state.projects[indexProjectLike].like;
                return Object.assign({}, state, {
                    projects: state.projects.map(item => item._id === action.id ? {
                        ...item,
                        like: ++countLike
                    } : item)
                });
            } else if (action.infoLike === "dizlike") {
                let countLike = state.projects[indexProjectLike].dizlike;
                return Object.assign({}, state, {
                    projects: state.projects.map(item => item._id === action.id ? {
                        ...item,
                        dizlike: ++countLike
                    } : item)
                });
            }
            break;

        case types.SORT_LIKES:
            if (action.likeToggle) {
                return Object.assign({}, state, {
                    projects: [...state.projects.sort(function (a, b) {
                        return a.like - b.like;
                    })]
                })
            } else if (!action.likeToggle) {
                return Object.assign({}, state, {
                    projects: [...state.projects.sort(function (a, b) {
                        return b.like - a.like;
                    })]
                })
            }
            break;

        case types.SORT_DATE:

            if (action.dateToggle) {
                return Object.assign({}, state, {
                    projects: [...state.projects.sort(function (a, b) {
                        let dateA = new Date(a.date);
                        let dateB = new Date(b.date);
                        return dateB - dateA;
                    })]
                })
            } else if (!action.dateToggle) {
                return Object.assign({}, state, {
                    projects: [...state.projects.sort(function (a, b) {
                        let dateA = new Date(a.date);
                        let dateB = new Date(b.date);
                        return dateA - dateB;
                    })]
                })
            }
            break;
        default:
            return state
    }
}

export default projectReducer;