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