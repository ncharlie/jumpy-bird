import { _decorator, Animation, CCFloat, Component, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Bird')
export class Bird extends Component {
    @property({
        type: CCFloat,
        tooltip: "How high can they fly",
    })
    public jumpHeight: number = 3.5;
    
    @property({
        type: CCFloat,
        tooltip: "How long can they fly",
    })
    public jumpDuration: number = 3.5;

    public animation: Animation;
    public location: Vec3;

    onLoad(): void {
        this.reset();

        this.animation = this.getComponent(Animation);
    }

    reset(): void {
        this.location = new Vec3();
        
        this.node.setPosition(this.location);
    }

    fly(): void {
        this.animation.stop();
        
        tween(this.node.position)
        .to(this.jumpDuration, new Vec3(this.node.position.x, this.node.position.y + this.jumpHeight, 0), 
        {easing: "smooth", onUpdate: (target: Vec3, ratio: number) => {this.node.position = target;}})
        .start();

        this.animation.play();
    }
}


