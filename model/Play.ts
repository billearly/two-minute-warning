import { PlayerPosition, PlayType, CardType } from '../enum';

export interface IPlay {
    id: string;
    cardType: CardType;
    playType: PlayType;
    source: PlayerPosition;
    target: PlayerPosition;
    title: string;
    description: string;
    difficulty: number;
}
