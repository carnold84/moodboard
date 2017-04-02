import React, { PropTypes, Children } from 'react';
import styled from 'styled-components';

const Container = styled.ul`
    font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
    list-style: none;
    align-items: center;
    flex-direction: 'row';
    justify-content: ${props => props.align};
    align-items: center;
    display: flex;
`;

const Menu = (props) => {

    const { children, type } = props;

    return (
        <Container type={type}>

            {children}
            
        </Container>
    );
};

const { oneOf, element, array } = PropTypes;

Menu.propTypes = {
    align: oneOf(['start', 'center', 'end']),
    children: array,
};

Menu.defaultProps = {
    align: 'start',
    children: [],
};

export default Menu;