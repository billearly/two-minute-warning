import React from 'react';
import styled from 'styled-components';
import {
    PlayerCard,
    PlayCard
} from './cards';
import {
    mockPlayers,
    mockPlays
} from '../data';

const TeamSide = styled.div`
    display: flex;
    justify-content: center;
    height: 50%;

    &:first-child {
        align-items: flex-end;
    }
`;

const GameBoardWrapper = styled.div`
    height: 100%;
`;

const GameBoard: React.SFC = () => {
    const getTeam = () => {
        return mockPlayers().map((data, i) => 
            <PlayerCard
                key={i}
                firstName={data.firstName}
                lastName={data.lastName}
                position={data.position}
                strength={data.strength}
                speed={data.speed}
                endurance={data.endurance}
            />
        );
    };

    const getPlays = () => {
        return mockPlays().map((play, i) => 
            <PlayCard
                key={i}
                type={play.type}
                source={play.source}
                target={play.target}
                title={play.title}
                description={play.description}
                difficulty={play.difficulty}
            />
        );
    }

    return (
        <GameBoardWrapper>
            <TeamSide>{getTeam()}</TeamSide>
            <TeamSide>{getTeam()}</TeamSide>
            <TeamSide>{getPlays()}</TeamSide>
        </GameBoardWrapper>
    );
};

export default GameBoard;