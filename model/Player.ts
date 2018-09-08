import { PlayerPosition } from 'enum';

export interface IPlayer {
    firstName: string,
    lastName: string;
    position: PlayerPosition;
    strength: number,
    speed: number,
    endurance: number
};
