import { IPlayer } from '../model';
import { PlayerPosition, CardType } from '../enum';

export const mockPlayers: IPlayer[] = [
    {
        id: '3894ut98h8934y',
        cardType: CardType.PLAYER,
        firstName: 'Bill',
        lastName: 'Early',
        position: PlayerPosition.QB,
        strength: 4,
        speed: 4,
        endurance: 5
    },
    {
        id: '9834ygfuh823hf',
        cardType: CardType.PLAYER,
        firstName: 'Greg',
        lastName: 'Pease',
        position: PlayerPosition.WR,
        strength: 3,
        speed: 4,
        endurance: 4
    },
    {
        id: '839u4gij5694hg',
        cardType: CardType.PLAYER,
        firstName: 'Kevin',
        lastName: 'Lee',
        position: PlayerPosition.TE,
        strength: 4,
        speed: 2,
        endurance: 0
    },
    {
        id: '034webnuwuebfcub',
        cardType: CardType.PLAYER,
        firstName: 'Chris',
        lastName: 'Adley',
        position: PlayerPosition.RB,
        strength: 4,
        speed: 1,
        endurance: 2
    },
    {
        id: '934fnhj9cdjw4',
        cardType: CardType.PLAYER,
        firstName: 'Jake',
        lastName: 'Smith',
        position: PlayerPosition.SR,
        strength: 1,
        speed: 4,
        endurance: 3
    }
];
