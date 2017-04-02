import React, { PropTypes } from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

const dash = keyframes`
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
`;

const Container = styled.div`
    width: 50px;
    height: 50px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

const Loader = styled.div`
    position: relative;
    margin: 0 auto;
    width: 50px;

    &:before {
        content: '';
        display: block;
        padding-top: 100%;
    }
`;

const Circle = styled.svg`
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    animation: ${rotate} 2s linear infinite;
    transform-origin: center center;
    margin: auto;
    stroke: #000000;
`;

const Path = styled.circle`
    stroke-width: 3px;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: ${dash} 1.5s ease-in-out infinite;
    stroke-linecap: round;
`;

const { Number, String } = PropTypes;

const Loading = () => {

    return (
        <Container>
            <Loader>
                <Circle viewBox="25 25 50 50">
                    <Path cx="50" cy="50" r="15" fill="none" stroke-width="3" stroke-miterlimit="10"/>
                </Circle>
            </Loader>
        </Container>
    );
};

export default Loading;