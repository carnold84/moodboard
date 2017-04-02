import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 50px;
    align-items: center;
    background-color: #ffffff;
    border-bottom: #f2f2f2 solid 1px;
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