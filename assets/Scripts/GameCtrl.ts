import { _decorator, CCInteger, Component, director, EventKeyboard, Input, input, KeyCode, Node } from 'cc';
import { Ground } from './Ground';
import { Results } from './Results';
import { Bird } from './Bird';
const { ccclass, property } = _decorator;

@ccclass('GameCtrl')
export class GameCtrl extends Component {
    @property({
        type: Ground,
        tooltip: "This is ground",
    })
    public ground: Ground;

    @property({
        type: Results,
        tooltip: "This is result labels",
    })
    public result: Results;

    @property({
        type: Bird,
        tooltip: "This is the bird",
    })
    public bird: Bird;

    @property({
        type: CCInteger,
    })
    public groundSpeed: number = 500;

    @property({
        type: CCInteger,
    })
    public pipeSpeed: number = 200;

    onLoad(): void {
        this.initListener();
        this.result.resetScore();
        director.pause();
    }

    startGame(): void {
        this.result.hideResults();
        director.resume();
    }

    gameOver(): void {
        this.result.showResults();
        director.pause();
    }

    resetGame(): void {
        this.result.resetScore();
        this.bird.reset();
        this.startGame();
    }

    initListener(): void {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);

        this.node.on(Node.EventType.TOUCH_START, () => {
            this.bird.fly();
        });
    }

    onClick(): void {
        this.bird.fly();
    }

    onKeyDown(event: EventKeyboard): void {
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                this.gameOver();
                break;
            case KeyCode.KEY_P:
                this.result.addScore();
                break;
            case KeyCode.KEY_Q:
                this.resetGame();
                break;
            case KeyCode.SPACE:
                this.bird.fly();
                break;
            default:
                break;
        }
    }
}


