import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.li`
    margin: 0 10px 0 0;

    a, a:link, a:visited {
        font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
        font-size: 13px;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: normal;
        color: #999999;
    }

    a:hover {
        color: #333333;
    }
`;

const MenuItem = (props) => {

    const { children } = props;

    return (
        <Container>{children}</Container>
    );
};

const { oneOfType, element, array } = PropTypes;

MenuItem.propTypes = {
    children: oneOfType([element, array]).isRequired,
};

export default MenuItem;