import * as types from './actionTypes';

const initialState = {
    projects: undefined,
    projectsById: {},
};

const reduce = (state = initialState, action = {}) => {

    console.log(state, action)
    
    switch (action.type) {
            
        case types.SET_PROJECTS:

            let projectsById = {};

            console.log(action.projects)

            action.projects.forEach((project) => {
                projectsById[project.id] = project;
            });

            return Object.assign(state, {
                projects: action.projects,
                projectsById: projectsById,
            });

        default:
            return state;
    }
};

export const getProjects = (state) => {
    return state.projects.projects;
};

export const getProjectsById = (state) => {
    return state.projects.projectsById;
};

export default reduce;