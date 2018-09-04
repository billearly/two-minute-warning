import React from 'react';
import styled from 'styled-components';
import { PlayerPosition } from '../../enum';
import CardBase from './CardBase';

interface IPlayerInfo {
    firstName: string,
    lastName: string;
    position: PlayerPosition;
    strength: number,
    speed: number,
    endurance: number
};

const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 0 1.5em;
    border-bottom: 0.06em solid lightgray;
`;

const PlayerName = styled.p`
    font-size: 1em;
    font-weight: bold;
    margin: 0;

    &:last-child {
        padding-top: 0.3em;
    }
`;

const PlayerPos = styled.p`
    font-size: 0.8em;
    font-weight: bold;
    margin: 0;
`;

const AttributeWrapper = styled.div`
    padding-top: 0.3em;
`;

const PlayerAttribute = styled.p`
    font-size: 0.7em;
    text-align: center;
`;

export const PlayerCard: React.SFC<IPlayerInfo> = ({ 
    firstName,
    lastName,
    position,
    strength,
    speed,
    endurance
}) => {
    return (
        <CardBase>
            <CardHeader>
                <div>
                    <PlayerName>{firstName}</PlayerName>
                    <PlayerName>{lastName}</PlayerName>
                </div>
                
                <PlayerPos>{position}</PlayerPos>
            </CardHeader>

            <AttributeWrapper>
                <PlayerAttribute>Strength: {strength}</PlayerAttribute>
                <PlayerAttribute>Speed: {speed}</PlayerAttribute>
                <PlayerAttribute>Endurance: {endurance}</PlayerAttribute>
            </AttributeWrapper>
        </CardBase>
    );
};