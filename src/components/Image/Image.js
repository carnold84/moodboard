import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    background-position: center center;
    background-size: cover;
    background-image: url(${props => props.url});
    align-items: center;
    justify-content: center;
    background-color: #ffff00;
    display: flex;
`;

const { Number, String } = PropTypes;

const Image = () => {

    return (
        <Container>
            Image
        </Container>
    );
};

export default Image;