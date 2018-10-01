import styled from 'styled-components';
import theme from '../theme/main';

export const ActionButton = styled.button`
    background-color: transparent;
    border: 1px dashed ${theme.colorBlackTransparent};
    border-radius: ${theme.borderRadius};
    color: ${theme.colorBlackTransparent};
    padding: 0.8rem;
    margin-right: 0.8rem;

    &:last-child {
        margin-right: 0;
    }
`;
