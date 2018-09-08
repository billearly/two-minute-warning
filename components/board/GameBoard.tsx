import React from 'react';
import styled from 'styled-components';
import { CardSlot, PlayerCard, PlayCard } from '../cards';
import { TeamSide } from './TeamSide';
import { PlayCardArea } from './PlayCardArea';
import { PlayCardDeck } from './PlayCardDeck';
import { ScoreBoard, PlayerDeck } from '../hud';
import { PlayerPosition } from '../../enum';

const GameBoardWrapper = styled.div`
    height: 100%;
    background-color: #b0c7b9;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23beddca' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const GameBoard: React.SFC = () => {
    return (
        <>
            <ScoreBoard />

            <GameBoardWrapper>
                <TeamSide>
                    <CardSlot playerPosition={PlayerPosition.CB} />
                    <CardSlot playerPosition={PlayerPosition.DE} />
                    <CardSlot playerPosition={PlayerPosition.LB} />
                    <CardSlot playerPosition={PlayerPosition.DT} />
                    <CardSlot playerPosition={PlayerPosition.S} />
                </TeamSide>
                
                <TeamSide>
                    <CardSlot playerPosition={PlayerPosition.WR} />
                    <CardSlot playerPosition={PlayerPosition.TE} />
                    <CardSlot playerPosition={PlayerPosition.QB} />
                    <CardSlot playerPosition={PlayerPosition.RB} />
                    <CardSlot playerPosition={PlayerPosition.WR} />
                </TeamSide>

                <PlayCardArea>
                    <CardSlot playerPosition={PlayerPosition.WR} />
                    <CardSlot playerPosition={PlayerPosition.WR} />
                    <CardSlot playerPosition={PlayerPosition.WR} />
                </PlayCardArea>

                <PlayCardDeck />
            </GameBoardWrapper>
        </>
    );
};

export default GameBoard;