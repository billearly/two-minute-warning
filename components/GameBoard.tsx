import React from 'react';
import PlayerCard from './PlayerCard';
import mockData from '../data/mock-team';

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
        <>
            {getTeam()}
        </>
    );
};

export default GameBoard;