import React from 'react';
import styled from 'styled-components';
import { TeamSide } from './TeamSide';
import { Deck } from './Deck';
import { Hand } from './Hand';
import { ScoreBoard } from '../hud';
import { Side } from '../../enum';
import Console from '../../dev/Console';

const GameBoardWrapper = styled.div`
    height: 100%;
    background-image: radial-gradient(#BBFFCD, #81B08D);
`;

const GameBoard: React.SFC = () => {
    const getDevConsole = () => {
        if (process.env.NODE_ENV === 'development') {
            return <Console />
        }
    };

    return (
        <>
            <ScoreBoard />

            <GameBoardWrapper>
                <TeamSide side={Side.DEFENSE} />
                <TeamSide side={Side.OFFENSE} />

                <Hand />
                <Deck />
            </GameBoardWrapper>

            {getDevConsole()}
        </>
    );
};

export default GameBoard;