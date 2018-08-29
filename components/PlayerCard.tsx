import React from 'react';
import styled from 'styled-components';
import PlayerPosition from '../enum/PlayerPosition';

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

const CardWrapper = styled.div`
    font-family: sans-serif;
    font-size: 1em;
    background-color: whitesmoke;
    display: inline-block;
    margin: 10px;
    padding: 15px;
    box-shadow: 0 1px 2px #888888;
    border-radius: 3px;
    width: 150px;
`;

const CardBanner = styled.div`
    width: 100%;
    height: 20px;
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
    padding: 25px 0;
    border-bottom: 1px solid lightgray;
`;

const PlayerName = styled.p`
    font-size: 1em;
    font-weight: bold;
    margin: 0;

    &:last-child {
        padding-top: 5px;
    }
`;

const PlayerPos = styled.p`
    font-size: 0.8em;
    font-weight: bold;
    margin: 0;
`;

const AttributeWrapper = styled.div`
    padding-top: 15px;
`;

const PlayerAttribute = styled.p`
    font-size: 0.7em;
    text-align: center;
`;

const PlayerCard: React.SFC<IPlayerInfo> = ({ 
    firstName,
    lastName,
    position,
    strength,
    speed,
    endurance
}) => {
    return (
        <CardWrapper>
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
        </CardWrapper>
    );
}

export default PlayerCard;