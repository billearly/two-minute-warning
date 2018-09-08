import { IPlay } from '../model';
import { PlayerPosition, PlayType } from '../enum';

export const mockPlays: IPlay[] = [
    {
        type: PlayType.PASS,
        source: PlayerPosition.QB,
        target: PlayerPosition.WR,
        title: 'Short Pass',
        description: 'Short pass to the slot receiver',
        difficulty: 3.2
    },
    {
        type: PlayType.RUN,
        source: PlayerPosition.QB,
        target: PlayerPosition.RB,
        title: 'Basic Run',
        description: 'Hand off to the running back',
        difficulty: 2.6
    },
    {
        type: PlayType.PASS,
        source: PlayerPosition.QB,
        target: PlayerPosition.WR,
        title: 'Hail Mary',
        description: 'Pray for a miracle',
        difficulty: 8.4
    }
];
