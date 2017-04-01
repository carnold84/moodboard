import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 260px;
    height: 24px;
    padding: 0 0 0 12px;
    background-color: #ffffff;
    border-radius: 12px;
    border: #e5e5e5 solid 1px;
    flex-direction: 'row';
    justify-content: space-around;
    align-items: center;
    display: flex;
`;

const Input = styled.input`
    width: 236px;
    height: 22px;
    font-family: inherit;
    font-size: 11px;
    color: #666666;
    border: none;
    align-items: center;
    display: flex;

    &:focus {
        outline: none;
    }
`;

const Button = styled.button`
    width: 24px;
    height: 24px;
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
    cursor: pointer;
    align-items: center;
    display: flex;

    &:focus {
        outline: none;
    }
`;

const Icon = styled.svg`
    fill: #d9d9d9;

    &:hover {
        fill: #999999;
    }
`;

const MainMenu = (props) => {

    const { links } = props;

    let items = links.map((link) => {
        return (
            <Link />
        );
    });

    return (
        <Container>

            {items}

        </Container>
    );
};

const { array } = PropTypes;

MainMenu.propTypes = {
    links: array.isRequired,
};

export default MainMenu;