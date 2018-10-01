import { action, observable, computed } from 'mobx';

export class ScoreBoardStore {
    private minutesPerGame: number = 0.5; // This should come from a higher level

    @observable
    isGameStarted: boolean = false;

    @observable 
    down: number = 1;

    @observable
    yardsToGo: number = 10;

    @observable
    homeScore: number = 14;

    @observable
    awayScore: number = 6;

    @observable
    timeLeft: number = 60000 * this.minutesPerGame;

    @computed
    get getCurrentDown (): string {
        let decorator: string = '';

        switch(this.down) {
            case 1:
                decorator = 'st';
                break;
            case 2:
                decorator = 'nd';
                break;
            case 3:
                decorator = 'rd';
                break;
            case 4:
                decorator = 'th';
                break;
        }

        return `${this.down}${decorator} and ${this.yardsToGo}`;
    }

    @computed
    get getScore (): string {
        return `${this.homeScore} - ${this.awayScore}`;
    }

    @computed
    get getTimeLeft (): string {
        if (this.timeLeft <= 0) {
            return '---';
        }

        var minutes = Math.floor((this.timeLeft % (1000 * 60 * 60)) / (1000 * 60)).toString();
        var seconds = Math.floor((this.timeLeft % (1000 * 60)) / 1000).toString();

        if (seconds.length < 2) {
            seconds = `0${seconds}`;
        }
        
        return `${minutes}:${seconds}`;
    }

    @action
    resetDowns = (): void => {
        this.down = 1;
        this.yardsToGo = 10;
    }

    @action
    makeRandomDown = (): void => {
        this.down = Math.floor(Math.random() * 4) + 1;
        this.yardsToGo = Math.floor(Math.random() * 30) + 1;
    }

    @action
    startGame = (): void => {
        if (!this.isGameStarted) {
            this.isGameStarted = true;

            const interval = setInterval(() => {
                if (this.timeLeft <= 0) {
                    clearInterval(interval);
                }
                
                this.timeLeft -= 1000;
            }, 1000);
        }
    }
}