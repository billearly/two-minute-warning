import { PlayerPosition, CardType } from 'enum';

export interface IPlayer {
    cardType: CardType;
    firstName: string;
    lastName: string;
    position: PlayerPosition;
    strength: number;
    speed: number;
    endurance: number;
};
