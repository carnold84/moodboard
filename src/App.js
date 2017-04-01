import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import * as reducers from './store/reducers';
import * as projectsActions from './store/projects/actions';
import Home from './containers/Home';

const AppContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
    background-color: #f2f2f2;
    display: flex;

    ::-webkit-input-placeholder {
        color: #cccccc;
    }

    :-moz-placeholder {
        color: #cccccc;
    }
    
    ::-moz-placeholder {
        color: #cccccc;
    }
    
    :-ms-input-placeholder {
        color: #cccccc;
    }
`;

const reducer = (state = {}, action) => {

    switch (action.type) {

        case 'SET_DATA':

            const { projects, images, links } = action.data;
            let itemsById = {};

            if (projects) {

                projects.forEach((project) => {
                    itemsById[project.id] = project;
                });
            }

            if (images) {

                images.forEach((image) => {
                    itemsById[image.id] = image;
                });
            }

            if (links) {

                links.forEach((link) => {
                    itemsById[link.id] = link;
                });
            }

            action.data.itemsById = itemsById;

            return action.data;

        default:
            return state;
    }
};

const store = createStore(
    combineReducers(reducers),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {

    componentWillMount = () => {

        fetch('./assets/data.json').then((resp) => {
            return resp.json();
        }).then((data) => {
            console.log(data.projects)
            store.dispatch(projectsActions.setProjects(data.projects));
        });
    };

    render = () => {
        return (
            <Provider store={store}>
                <AppContainer>
                    <Home />
                </AppContainer>
            </Provider>
        );
    }
}

export default App;