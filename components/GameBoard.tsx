import React from 'react';
import PlayerCard from './PlayerCard';
import mockData from '../data/mock-team';
import styled from 'styled-components';

const TeamSide = styled.div`
    height: 50%;
`;

const GameBoardWrapper = styled.div`
    height: 100%;
`;

const GameBoard: React.SFC = () => {
    const getTeam = () => {
        return mockData.map((data, i) => 
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

    return (
        <GameBoardWrapper>
            <TeamSide>{getTeam()}</TeamSide>
            <TeamSide>{getTeam()}</TeamSide>
        </GameBoardWrapper>
    );
};

export default GameBoard;