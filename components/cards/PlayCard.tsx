import styled from 'styled-components';
import CardBase from './CardBase';
import { IPlay } from '../../model';
import { Component } from 'react';

const PlayTitle = styled.p`
    color: white;

    font-weight: bold;
    margin-top: 0;
    position: relative;
    z-index: 1;
`;

const PlayDescription = styled.p`
    color: white;
    font-size: 0.8em;
    
    position: relative;
    z-index: 1;
`;

const ColorAccent = styled.div`
    background-color: #E85558;
    height: 80%;
    width: 150%;

    position: absolute;
    bottom: -15%;
    left: -30%;

    transform: rotate(12deg);

    &:first-of-type {
        background-color: gray;
        bottom: 30%;
    }
`;

export const PlayCard: React.SFC<IPlay> = ({
    playType,
    source,
    target,
    title,
    description,
    difficulty
}) => {
    return (
        <CardBase>
            <PlayTitle>{title}</PlayTitle>

            <PlayDescription>{playType}</PlayDescription>
            <PlayDescription>{source} to {target}</PlayDescription>
            <PlayDescription>{description}</PlayDescription>
            <PlayDescription>Difficulty: {difficulty}</PlayDescription>

            <ColorAccent />
            <ColorAccent />
        </CardBase>
    );
};
