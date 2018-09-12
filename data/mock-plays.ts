import { IPlay } from '../model';
import { PlayerPosition, PlayType, CardType } from '../enum';

export const mockPlays: IPlay[] = [
    {
        cardType: CardType.PLAY,
        playType: PlayType.PASS,
        source: PlayerPosition.QB,
        target: PlayerPosition.WR,
        title: 'Short Pass',
        description: 'Short pass to the slot receiver',
        difficulty: 3.2
    },
    {
        cardType: CardType.PLAY,
        playType: PlayType.RUN,
        source: PlayerPosition.QB,
        target: PlayerPosition.RB,
        title: 'Basic Run',
        description: 'Hand off to the running back',
        difficulty: 2.6
    },
    {
        cardType: CardType.PLAY,
        playType: PlayType.PASS,
        source: PlayerPosition.QB,
        target: PlayerPosition.WR,
        title: 'Hail Mary',
        description: 'Pray for a miracle',
        difficulty: 8.4
    }
];
