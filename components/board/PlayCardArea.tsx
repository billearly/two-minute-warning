import React from 'react';
import styled from 'styled-components';
import theme from '../theme/main';

const PlayCardAreaWrapper = styled.aside`
    background-color: ${theme.colorWhiteTransparent};
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 18rem;
    opacity: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        opacity: 1;
    }

    transition: opacity ${theme.quickTransition};
`;

export const PlayCardArea: React.SFC = ({ children }) => {
    return (
        <PlayCardAreaWrapper>
            {children}
        </PlayCardAreaWrapper>
    );
}