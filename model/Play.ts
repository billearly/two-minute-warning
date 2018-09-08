import { PlayerPosition, PlayType } from '../enum';

export interface IPlay {
    type: PlayType,
    source: PlayerPosition,
    target: PlayerPosition,
    title: string,
    description: string,
    difficulty: number
}
