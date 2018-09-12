import styled from 'styled-components';

interface IProps {
    color: string;
}

export const ColorAccent = styled.div`
    background-color: ${(props: IProps) => props.color};
    height: 80%;
    width: 150%;

    position: absolute;
    bottom: -15%;
    left: -30%;

    transform: rotate(12deg);
`;