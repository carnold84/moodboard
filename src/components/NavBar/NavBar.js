import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 60px;
    align-items: center;
    background-color: #ffffff;
    flex-direction: 'row';
    justify-content: space-around;
    align-items: center;
    display: flex;
`;

const NavBar = (props) => {

    const { children } = props;

    return (
        <Container>

            {children}
            
        </Container>
    );
};

const { oneOfType, element, array } = PropTypes;

NavBar.propTypes = {
    children: oneOfType([element, array]),
};

export default NavBar;