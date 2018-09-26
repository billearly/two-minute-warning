import React from 'react';
import styled from 'styled-components';
import theme from '../theme/main';

interface IProps {
    label: string
}

const StyledSlot = styled.div`
    width: ${theme.cardWidth};
    height: ${theme.cardHeight};
    margin: ${theme.cardMargin};

    background-color: transparent;
    border: 1px dashed ${theme.colorBlackTransparent};
    border-radius: ${theme.borderRadius};
    overflow: visible;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const SlotLabel = styled.span`
    text-align: center;
    color: ${theme.colorBlackTransparent};

    margin: 0 auto;
    padding: 0.5em 1em;

    border: 1px dashed ${theme.colorBlackTransparent};
    border-radius: 0.2em;
`;

export const Slot: React.SFC<IProps> = ({ label, children }) => {
    return (
        <StyledSlot>
            {children || <SlotLabel>{label}</SlotLabel>}
        </StyledSlot>
    );
};