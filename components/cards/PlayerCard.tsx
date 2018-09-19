import React from 'react';
import styled from 'styled-components';
import { IPlayer } from '../../model';
import CardBase from './CardBase';
import { ColorAccent } from './ColorAccent';

interface IProps {
    playerInfo: IPlayer;
    isInPlay?: boolean;
}

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
    position: relative;
    z-index: 1;
`;

const PlayerAttribute = styled.p`
    font-size: 0.7em;
    text-align: center;
`;

export const PlayerCard: React.SFC<IProps> = ({ playerInfo, isInPlay }) => {
    return (
        <CardBase isInPlay={isInPlay}>
            <CardHeader>
                <div>
                    <PlayerName>{playerInfo.firstName}</PlayerName>
                    <PlayerName>{playerInfo.lastName}</PlayerName>
                </div>
                
                <PlayerPos>{playerInfo.position}</PlayerPos>
            </CardHeader>

            <AttributeWrapper>
                <PlayerAttribute>Strength: {playerInfo.strength}</PlayerAttribute>
                <PlayerAttribute>Speed: {playerInfo.speed}</PlayerAttribute>
                <PlayerAttribute>Endurance: {playerInfo.endurance}</PlayerAttribute>
            </AttributeWrapper>

            <ColorAccent color='#3EBDE8'/>
        </CardBase>
    );
}
