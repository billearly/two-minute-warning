import React from 'react';
import styled from 'styled-components';
import { IPlayer } from '../../model';
import CardBase from './CardBase';
import { ColorAccent } from './ColorAccent';

interface IProps {
    playerInfo: IPlayer;
    isInPlay?: boolean;
    handleClick?: (e: object) => void;
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
    text-align: left;

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

export const PlayerCard: React.SFC<IProps> = ({
    playerInfo,
    isInPlay,
    handleClick
}) => {
    return (
        <CardBase isInPlay={isInPlay} onClick={handleClick}>
            <CardHeader>
                <div>
                    <PlayerName data-target='first-name'>{playerInfo.firstName}</PlayerName>
                    <PlayerName data-target='last-name'>{playerInfo.lastName}</PlayerName>
                </div>
                
                <PlayerPos data-target='position'>{playerInfo.position}</PlayerPos>
            </CardHeader>

            <AttributeWrapper>
                <PlayerAttribute data-target='speed'>Strength: {playerInfo.strength}</PlayerAttribute>
                <PlayerAttribute data-target='strength'>Speed: {playerInfo.speed}</PlayerAttribute>
                <PlayerAttribute data-target='endurance'>Endurance: {playerInfo.endurance}</PlayerAttribute>
            </AttributeWrapper>

            <ColorAccent color='#3EBDE8'/>
        </CardBase>
    );
}
