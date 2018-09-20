import { PlayerPosition, CardType } from 'enum';

export interface IPlayer {
    id: string;
    cardType: CardType;
    firstName: string;
    lastName: string;
    position: PlayerPosition;
    strength: number;
    speed: number;
    endurance: number;
};
