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
    width: 70%;
    margin: 0 auto;

    &:first-child {
        align-items: flex-end;
        border-bottom: 2px solid white;
    }
`;

const GameBoardWrapper = styled.div`
    height: 100%;
    background-color: #b0c7b9;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23beddca' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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