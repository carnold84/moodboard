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

const Search = (props) => {

    const { onSubmit } = props;

    let input = undefined;

    return (
        <Container>

            <Input placeholder="Search" innerRef={(el) => input = el} />

            <Button onClick={(value) => onSubmit(input.value)}>

                <Icon width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </Icon>
                
            </Button>

        </Container>
    );
};

const { func } = PropTypes;

Search.propTypes = {
    onSubmit: func.isRequired,
};

export default Search;