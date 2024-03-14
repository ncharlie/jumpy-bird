import { _decorator, Component, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Results')
export class Results extends Component {
    @property({
        type: Label,
    })
    public scoreLabel: Label;

    @property({
         type: Label,
    })
    public highScore: Label;

    @property({
         type: Label,
    })
    public resultEnd: Label;

    maxScore: number = 0;
    currentScore: number;

    updateScore(num: number): void {
        this.currentScore = num;
        this.scoreLabel.string = '' + this.currentScore;
    }

    resetScore(): void {
        this.updateScore(0);
        this.hideResults();
    }

    addScore(): void {
        this.updateScore(this.currentScore + 1);
    }

    showResults(): void {
        this.maxScore = Math.max(this.maxScore, this.currentScore);
        this.highScore.string = "High Score: " + this.maxScore;

        this.highScore.node.active = true;
        this.resultEnd.node.active = true;
    }

    hideResults(): void {
        this.highScore.node.active = false;
        this.resultEnd.node.active = false;
    }
}


