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

interface IImageProps { 
    position: PlayerPosition;
}

const CardBanner = styled.div`
    width: 100%;
    height: 1.25em;
    background-color: ${(p: IImageProps) => {
        switch (p.position) {
            case PlayerPosition.QB:
                return 'red';
            case PlayerPosition.WR:
                return 'blue';
            case PlayerPosition.RB:
                return 'green';
            case PlayerPosition.TE:
                return 'white'
            default:
                return 'grey';
        }
    }};
`;

const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1.5em 0;
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
            <CardBanner position={position} />

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