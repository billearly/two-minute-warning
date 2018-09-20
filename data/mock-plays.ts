import { IPlay } from '../model';
import { PlayerPosition, PlayType, CardType } from '../enum';

export const mockPlays: IPlay[] = [
    {
        id: '93yfih9843whfh',
        cardType: CardType.PLAY,
        playType: PlayType.PASS,
        source: PlayerPosition.QB,
        target: PlayerPosition.WR,
        title: 'Short Pass',
        description: 'Short pass to the slot receiver',
        difficulty: 3.2
    },
    {
        id: '7654gbfvujn923',
        cardType: CardType.PLAY,
        playType: PlayType.RUN,
        source: PlayerPosition.QB,
        target: PlayerPosition.RB,
        title: 'Basic Run',
        description: 'Hand off to the running back',
        difficulty: 2.6
    },
    {
        id: '094erngv834nf',
        cardType: CardType.PLAY,
        playType: PlayType.PASS,
        source: PlayerPosition.QB,
        target: PlayerPosition.WR,
        title: 'Hail Mary',
        description: 'Pray for a miracle',
        difficulty: 8.4
    }
];
