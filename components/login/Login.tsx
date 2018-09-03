import React from 'react';
import styled from 'styled-components';

const LoginHeader = styled.div`
    padding-bottom: 1.5em;
`;

const Title = styled.h2`
    font-size: 2em;
    text-align: center;
`;

const Description = styled.p`
    text-align: center;
`;

const LoginBox = styled.div`
    background-color: white;
    width: 25em;
    margin: 1em auto;
    padding: 2em;
    box-shadow: 0 0.06em 0.5em #888888;
    border-radius: 0.2em;
`;

const Input = styled.input`
    display: block;
    margin: 2em 0;
    padding: 0.4em;
    padding-left: 0;
    width: 100%;

    border: none;
    border-bottom: 1px solid ${props => props.theme.colorBlue};

    ::placeholder {
        color: ${props => props.theme.colorBlue};
    }
`;

const Button = styled.button`
    display: inline-block;
    color: ${props => props.theme.colorBlue};
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${props => props.theme.colorBlue};
    border-radius: 3px;
    background-color: transparent;
    cursor: pointer;
`;

export const Login: React.SFC = () => {
    return (
        <LoginBox>
            <LoginHeader>
                <Title>Sign In</Title>
                <Description>Access your decks and get playing</Description>
                
                <form>
                    <Input id='email' type='email' placeholder='Email' />
                    <Input type='password' placeholder='Password' />

                    <Button >Go</Button>
                </form>
                
            </LoginHeader>
        </LoginBox>
    );
};