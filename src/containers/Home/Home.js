import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as projectsSelectors from '../../store/projects/reducer';
import NavBar from '../../components/NavBar';
import Search from '../../components/Search';

const Container = styled.div`
    flex-grow: 1;
    flex-direction: column;
    display: flex;
`;

const Content = styled.div`
    flex-grow: 1;
    flex-direction: column;
    display: flex;
`;

class Home extends Component {

    render = () => {

        const { itemsById, pinned } = this.props;

        let pinnedContent = [];

        if (itemsById) {

            pinned.map((id) => {
                pinnedContent.push(itemsById[id].title);
            });
        }

        console.log(pinnedContent)

        return (
            <Container>

                <NavBar>

                    <Search onSubmit={(value) => { console.log(value); }} />

                    <ul>
                        <li><a href="#">Home</a></li>
                    </ul>

                </NavBar>

                <Content>

                    {pinnedContent}

                </Content>

            </Container>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    projects: projectsSelectors.getProjects(state),
    projectsById: projectsSelectors.getProjectsById(state),
  };
}

export default connect(mapStateToProps)(Home);