import { _decorator, Canvas, Component, director, Node, UITransform, Vec3 } from 'cc';
import { GameCtrl } from './GameCtrl';
const { ccclass, property } = _decorator;

@ccclass('Ground')
export class Ground extends Component {
    @property({
         type: Node,
         tooltip: "Ground 1 is here",
    })
    public ground1: Node;

    @property({
         type: Node,
         tooltip: "Ground 2 is here",
    })
    public ground2: Node;

    @property({
         type: Node,
         tooltip: "Ground 3 is here",
    })
    public ground3: Node;

    private grounds: Node[];

    public groundWidth: number;

    public gameCtrl = new GameCtrl;
    private speed: number = 300;

    onLoad(): void {
        this.startUp();
    }

    startUp(): void {
        this.groundWidth = this.ground1.getComponent(UITransform).width;
        this.ground2.getComponent(UITransform).width = this.groundWidth;
        this.ground3.getComponent(UITransform).width = this.groundWidth;

        this.ground1.setPosition(new Vec3());
        this.ground2.setPosition(new Vec3(this.groundWidth));
        this.ground3.setPosition(new Vec3(2 * this.groundWidth));

        this.grounds  = [this.ground1, this.ground2, this.ground3];
    }

    update(deltaTime: number): void  {
        this.speed = this.gameCtrl.groundSpeed;

        // const screen = director.getScene();
        // const canvas = screen.getComponentInChildren(Canvas);

        const distance = this.speed * deltaTime;
        for (const [i] of this.grounds.entries()) {
            const newPosition: Vec3 = this.grounds[i].position;
            newPosition.x -= distance;

            if (newPosition.x + this.groundWidth <= 0) {
                if (i > 0) {
                    newPosition.x = this.grounds[i-1].position.x + this.groundWidth;
                }else {
                    newPosition.x = this.grounds[2].position.x + this.groundWidth - distance;
                }
            }

            this.grounds[i].setPosition(newPosition);
        }
        
    }
}


