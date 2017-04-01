import * as types from './actionTypes';

export const setProjects = (projects) => {

    return (dispatch, getState) => {
        dispatch({ type: types.SET_PROJECTS, projects });
    };
};