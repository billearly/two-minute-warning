import { observable } from 'mobx'

//temp
import { IPlayer } from '../model';
import { PlayerPosition }  from '../enum';


export class HandStore {
    @observable
    cards: IPlayer[] = [
        {
            firstName: 'Jim',
            lastName: 'Bob',
            position: PlayerPosition.QB,
            strength: 5,
            speed: 6,
            endurance: 7
        },
        {
            firstName: 'Jim',
            lastName: 'Bob',
            position: PlayerPosition.QB,
            strength: 5,
            speed: 6,
            endurance: 7
        },
        {
            firstName: 'Jim',
            lastName: 'Bob',
            position: PlayerPosition.QB,
            strength: 5,
            speed: 6,
            endurance: 7
        }
    ];
}