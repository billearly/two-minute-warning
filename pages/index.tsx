import React from 'react';
import styled from 'styled-components';
import { 
    Login,
    LoginSkip
} from '../components/login';

const MainWrapper = styled.main`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #dbe5de;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2392ac96' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
`;

const Index: React.SFC = () => {
    return (
        <MainWrapper>
            <Login />
            <LoginSkip />
        </MainWrapper>
    );
};

export default Index;